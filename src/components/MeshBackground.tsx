import { useEffect, useRef } from "react";

const GRID_SPACING_A = 34;
const GRID_SPACING_B = 52;
const SAMPLE_STEP = 24;
const GRAVITY_RADIUS = 280;
const GRAVITY_STRENGTH = 20;

function warpPoint(px: number, py: number, mx: number, my: number) {
  const dx = mx - px;
  const dy = my - py;
  const distSq = dx * dx + dy * dy;
  const radiusSq = GRAVITY_RADIUS * GRAVITY_RADIUS;

  if (distSq > radiusSq) {
    return { x: px, y: py };
  }

  const dist = Math.sqrt(distSq) || 1;
  const falloff = 1 - distSq / radiusSq;
  const pull = GRAVITY_STRENGTH * falloff * falloff;

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
  slope: 1 | -1,
  mx: number,
  my: number,
) {
  const margin = Math.max(width, height) * 0.3;

  if (slope === 1) {
    for (let b = -height - margin; b <= width + margin; b += spacing) {
      ctx.beginPath();
      let moved = false;

      for (let x = -margin; x <= width + margin; x += SAMPLE_STEP) {
        const y = x - b;
        const p = warpPoint(x, y, mx, my);

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

    for (let x = -margin; x <= width + margin; x += SAMPLE_STEP) {
      const y = -x + c;
      const p = warpPoint(x, y, mx, my);

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
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

    const render = () => {
      resizeCanvas();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const isDark = document.documentElement.classList.contains("dark");

      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark
        ? "rgba(99, 102, 241, 0.22)"
        : "rgba(99, 102, 241, 0.16)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        GRID_SPACING_A,
        1,
        currentX,
        currentY,
      );

      ctx.strokeStyle = isDark
        ? "rgba(56, 189, 248, 0.2)"
        : "rgba(56, 189, 248, 0.14)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        GRID_SPACING_A,
        -1,
        currentX,
        currentY,
      );

      ctx.strokeStyle = isDark
        ? "rgba(14, 165, 233, 0.14)"
        : "rgba(14, 165, 233, 0.1)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        GRID_SPACING_B,
        1,
        currentX,
        currentY,
      );

      ctx.strokeStyle = isDark
        ? "rgba(16, 185, 129, 0.12)"
        : "rgba(16, 185, 129, 0.08)";
      drawDeformedDiagonalSet(
        ctx,
        width,
        height,
        GRID_SPACING_B,
        -1,
        currentX,
        currentY,
      );

      const glow = ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        GRAVITY_RADIUS,
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

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    render();

    return () => {
      window.removeEventListener("mousemove", onMove);
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
