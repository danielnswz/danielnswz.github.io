import { useEffect, useState } from 'react'
import type { SectionId } from '@/data/content'

export function useActiveSection(ids: SectionId[]): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(ids[0] ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveId(visible[0].target.id as SectionId)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 1] },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return activeId
}