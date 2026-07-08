import { profile, currentlyAt, roleConstellation } from '@/data/content'
import { PillLink } from './PillLink'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, ClockIcon, DownloadIcon, ArrowRightIcon } from './icons'

export function Hero() {
  return (
    <section className="relative min-h-svh flex items-center pt-20 pb-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-soft px-3 py-1 text-xs font-medium text-ink/70 dark:border-ink-border dark:bg-ink-soft dark:text-light/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {profile.first}{' '}
              <span className="text-accent-dark dark:text-accent">{profile.last}</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-ink/80 dark:text-light/80">
              {profile.title}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink/60 dark:text-light/60">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-light/40">
                Currently
              </span>
              <PillLink mention={currentlyAt} />
            </div>

            <p className="mt-5 max-w-xl text-base text-ink/60 dark:text-light/60 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRightIcon width={16} height={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <DownloadIcon width={16} height={16} />
                Resume
              </a>
              <a href="#contact" className="btn-ghost">
                Get in Touch
              </a>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-light/40">
                Connect
              </p>
              <div className="flex items-center gap-3">
                <SocialLink href={profile.github} label="GitHub" icon={<GitHubIcon width={18} height={18} />} />
                <SocialLink href={profile.linkedin} label="LinkedIn" icon={<LinkedInIcon width={18} height={18} />} />
                <SocialLink href={`mailto:${profile.email}`} label="Email" icon={<MailIcon width={18} height={18} />} />
              </div>
            </div>
          </div>

          <div className="animate-fade-in md:justify-self-end">
            <div
              tabIndex={0}
              aria-label="Hover or focus to see roles"
              className="group grid justify-items-center gap-4 focus:outline-none"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl" />
                <img
                  src="/avatar.png"
                  alt={`${profile.name} — Software Engineer`}
                  width={176}
                  height={176}
                  loading="eager"
                  className="h-44 w-44 rounded-full border border-light-border object-cover transition-transform duration-200 group-hover:scale-95 group-focus-visible:scale-95 dark:border-ink-border"
                />
              </div>

              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-light/60">
                  <MapPinIcon width={14} height={14} />
                  {profile.location}
                  <span className="ml-1">{'🇦🇷'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-light/60">
                  <ClockIcon width={14} height={14} />
                  {profile.timezone}
                </span>
              </div>

              <div
                className="grid w-full max-w-xs grid-cols-2 gap-2 opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:pointer-events-auto"
                aria-hidden="false"
              >
                {roleConstellation.map((role) => (
                  <div
                    key={role}
                    className="card flex items-center gap-2.5 px-3 py-2.5"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent-dark dark:bg-accent" aria-hidden />
                    <span className="text-xs font-medium text-ink/70 dark:text-light/70">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-ink/40 dark:text-light/40">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-scroll-cue">
            <path d="M8 1v18M2 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-light-border text-ink/70 transition-colors hover:bg-light-soft hover:text-ink dark:border-ink-border dark:text-light/70 dark:hover:bg-ink-soft dark:hover:text-light"
    >
      {icon}
    </a>
  )
}