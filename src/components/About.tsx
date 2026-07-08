import { profile, aboutBio, aboutStats } from '@/data/content'
import { MapPinIcon } from './icons'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader num="01" title="About" subtitle="Built with care. Designed to scale." />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-ink/70 dark:text-light/70">
            {aboutBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="flex items-center gap-2 pt-3 text-sm text-ink/60 dark:text-light/60">
              <MapPinIcon width={16} height={16} className="text-accent-dark dark:text-accent" />
              {profile.location} — open to remote & relocation
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
            {aboutStats.map((s) => (
              <div key={s.title} className="card p-5">
                <p className="font-mono text-3xl font-semibold text-accent-dark dark:text-accent">
                  {s.big}
                </p>
                <p className="mt-2 text-sm font-medium">{s.title}</p>
                <p className="mt-1 text-xs text-ink/65 dark:text-light/65">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}