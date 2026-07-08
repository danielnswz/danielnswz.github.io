import { useEffect, useRef } from "react";

const ACTIVE_RENDER_MS = 1400;

type MeshQuality = {
  spacingA: number;
  spacingB: number;
  sampleStep: number;
  gravityRadius: number;
  gravityStrength: number;
};

function warpPoint(
  px: number,
  py: number,
  mx: number,
  my: number,
  gravityRadius: number,
  gravityStrength: number,
) {
  const dx = mx - px;
  const dy = my - py;
  const distSq = dx * dx + dy * dy;
  const radiusSq = gravityRadius * gravityRadius;

  if (distSq > radiusSq) {
    return { x: px, y: py };
  }

  const dist = Math.sqrt(distSq) || 1;
  const falloff = 1 - distSq / radiusSq;
  const pull = gravityStrength * falloff * falloff;

  return {
    x: px + (dx / dist) * pull,
    y: py + (dy / dist) * pull,
  };
}

function drawDeformedDiagonalSet(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spacing: number,
  sampleStep: number,
  slope: 1 | -1,
  mx: number,
  my: number,
  gravityRadius: number,
  gravityStrength: number,
) {
  const margin = Math.max(width, height) * 0.3;

  if (slope === 1) {
    for (let b = -height - margin; b <= width + margin; b += spacing) {
      ctx.beginPath();
      let moved = false;

      for (let x = -margin; x <= width + margin; x += sampleStep) {
        const y = x - b;
        const p = warpPoint(x, y, mx, my, gravityRadius, gravityStrength);

        if (!moved) {
          ctx.moveTo(p.x, p.y);
          moved = true;
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }

      ctx.stroke();
    }
    return;
  }

  for (let c = -margin; c <= width + height + margin; c += spacing) {
    ctx.beginPath();
    let moved = false;

    for (let x = -margin; x <= width + margin; x += sampleStep) {
      const y = -x + c;
      const p = warpPoint(x, y, mx, my, gravityRadius, gravityStrength);

      if (!moved) {
        ctx.moveTo(p.x, p.y);
        moved = true;
      } else {
        ctx.lineTo(p.x, p.y);
      }
    }

    ctx.stroke();
  }
}

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let raf = 0;
    let reduceMotion = false;
    let isDisposed = false;
    let lastMoveAt = performance.now();
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const quality: MeshQuality = window.matchMedia("(pointer: coarse)").matches
      ? {
          spacingA: 44,
          spacingB: 68,
          sampleStep: 32,
          gravityRadius: 220,
          gravityStrength: 14,
        }
      : {
          spacingA: 34,
          spacingB: 52,
          sampleStep: 24,
          gravityRadius: 280,
          gravityStrength: 20,
        };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveAt = performance.now();

      if (!reduceMotion && raf === 0) {
        raf = requestAnimationFrame(render);
      }
    };

    const onMotionPreferenceChange = (e: MediaQueryListEvent) => {
      reduceMotion = e.matches;

      if (reduceMotion) {
        window.removeEventListener("mousemove", onMove);
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
        currentX = mouseX;
        currentY = mouseY;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        drawFrame();
      } else if (!raf && !isDisposed) {
        window.addEventListener("mousemove", onMove, { passive: true });
        lastMoveAt = performance.now();
        raf = requestAnimationFrame(render);
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const nextWidth = Math.floor(width * dpr);
      const nextHeight = Math.floor(height * dpr);

      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = () => {
      resizeCanvas();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const isDark = document.documentElement.classList.contains("dark");

      if (!reduceMotion) {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark
        ? "rgba(99, 102, 241, 0.22)"
        : "rgba(99, 102, 241, 0.16)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        quality.spacingA,
        quality.sampleStep,
        1,
        currentX,
        currentY,
        quality.gravityRadius,
        quality.gravityStrength,
      );

      ctx.strokeStyle = isDark
        ? "rgba(56, 189, 248, 0.2)"
        : "rgba(56, 189, 248, 0.14)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        quality.spacingA,
        quality.sampleStep,
        -1,
        currentX,
        currentY,
        quality.gravityRadius,
        quality.gravityStrength,
      );

      ctx.strokeStyle = isDark
        ? "rgba(14, 165, 233, 0.14)"
        : "rgba(14, 165, 233, 0.1)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        quality.spacingB,
        quality.sampleStep,
        1,
        currentX,
        currentY,
        quality.gravityRadius,
        quality.gravityStrength,
      );

      ctx.strokeStyle = isDark
        ? "rgba(16, 185, 129, 0.12)"
        : "rgba(16, 185, 129, 0.08)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        quality.spacingB,
        quality.sampleStep,
        -1,
        currentX,
        currentY,
        quality.gravityRadius,
        quality.gravityStrength,
      );

      const glow = ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        quality.gravityRadius,
      );
      glow.addColorStop(
        0,
        isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.1)",
      );
      glow.addColorStop(
        0.35,
        isDark ? "rgba(56, 189, 248, 0.08)" : "rgba(56, 189, 248, 0.06)",
      );
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const render = () => {
      drawFrame();

      const hasRecentInteraction =
        performance.now() - lastMoveAt < ACTIVE_RENDER_MS;
      const cursorStillSettling =
        Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5;

      if (!reduceMotion && (hasRecentInteraction || cursorStillSettling)) {
        raf = requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    reduceMotion = reducedMotionQuery.matches;
    reducedMotionQuery.addEventListener("change", onMotionPreferenceChange);

    if (reduceMotion) {
      drawFrame();
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(render);
    }

    return () => {
      isDisposed = true;
      window.removeEventListener("mousemove", onMove);
      reducedMotionQuery.removeEventListener("change", onMotionPreferenceChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="mesh-overlay pointer-events-none fixed inset-0 -z-10"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="mesh-vignette absolute inset-0" />
    </div>
  );
}
