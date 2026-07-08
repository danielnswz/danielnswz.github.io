import { profile, navSections, builtWith } from '@/data/content'
import type { SectionId } from '@/data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpIcon } from './icons'

export function Footer() {
  const go = (id: SectionId) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-light-border dark:border-ink-border">
      <div className="border-b border-light-border dark:border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-3 text-xs text-ink/50 dark:text-light/50">
          <span className="font-mono">Built with</span>
          <span className="text-ink/30 dark:text-light/30">·</span>
          {builtWith.map((tech, i) => (
            <span key={tech} className="inline-flex items-center gap-2">
              <span className="font-mono">{tech}</span>
              {i < builtWith.length - 1 && (
                <span className="text-ink/20 dark:text-light/20">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent font-mono text-sm font-semibold text-light">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold">{profile.name}</span>
          </div>
          <p className="text-sm text-ink/60 dark:text-light/60">
            {profile.title.split('·')[0].trim()} · {profile.location}
          </p>
          <p className="inline-flex items-center gap-2 text-xs text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to work
          </p>
        </div>

        <nav className="flex flex-col items-start gap-1.5 md:items-center" aria-label="Footer">
          {navSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className="nav-link text-left md:text-center"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="link-quiet">
              <GitHubIcon width={18} height={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="link-quiet">
              <LinkedInIcon width={18} height={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="link-quiet">
              <MailIcon width={18} height={18} />
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-ghost"
              aria-label="Back to top"
            >
              <ArrowUpIcon width={16} height={16} />
              Back to top
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-light-border dark:border-ink-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col items-center justify-between gap-2 text-xs text-ink/50 dark:text-light/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>
            <a href={`mailto:${profile.email}`} className="link-quiet">{profile.email}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}