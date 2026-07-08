import { useEffect, useState } from 'react'
import { profile, navSections } from '@/data/content'
import type { SectionId } from '@/data/content'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'
import { DownloadIcon } from './icons'
import { analytics } from '@/lib/analytics'

const handleResumeClick = () => analytics.resumeDownload('nav')

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navSections.map((s) => s.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'border-b border-light-border bg-light/85 backdrop-blur dark:border-ink-border dark:bg-ink/85'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent font-mono text-sm font-semibold text-light">
            {profile.initials}
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              aria-current={active === s.id}
              className="nav-link"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleResumeClick}
            className="btn-ghost hidden sm:inline-flex"
          >
            <DownloadIcon width={16} height={16} />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-light-border text-ink/70 hover:bg-light-soft dark:border-ink-border dark:text-light/70 dark:hover:bg-ink-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-light-border bg-light/95 backdrop-blur dark:border-ink-border dark:bg-ink/95">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
            {navSections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                aria-current={active === s.id}
                className="nav-link text-left"
              >
                <span className="font-mono text-xs text-accent-dark dark:text-accent mr-2">
                  {s.num}
                </span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}