import { useEffect, useRef } from 'react'

export function MeshBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const tick = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      if (ref.current) {
        ref.current.style.setProperty('--mx', `${currentX}px`)
        ref.current.style.setProperty('--my', `${currentY}px`)
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-90"
      style={{
        background:
          'radial-gradient(700px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.18), transparent 50%)',
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .mesh-overlay { display: none !important; }
        }
      `}</style>
    </div>
  )
}