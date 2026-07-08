import { qualifications } from '@/data/content'
import { GradCapIcon, CloudIcon, LanguageIcon, ChevronDownIcon } from './icons'
import { SectionHeader } from './SectionHeader'

const iconFor = {
  grad: GradCapIcon,
  cloud: CloudIcon,
  lang: LanguageIcon,
} as const

export function Qualifications() {
  return (
    <section id="qualifications" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader num="05" title="Qualifications" subtitle="Education & Languages" />

        <div className="grid gap-3">
          {qualifications.map((q) => {
            const Icon = iconFor[q.icon]
            return (
              <details key={q.title} className="card group p-5">
                <summary className="flex cursor-pointer items-center gap-3 list-none marker:content-none">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent-dark dark:text-accent">
                    <Icon width={18} height={18} />
                  </span>
                  <div className="grid flex-1 gap-0.5">
                    <p className="text-sm font-semibold">{q.title}</p>
                    <p className="text-xs text-ink/60 dark:text-light/60">{q.issuer}</p>
                    <p className="text-xs text-ink/40 dark:text-light/40">{q.period}</p>
                  </div>
                  <ChevronDownIcon
                    width={18}
                    height={18}
                    className="shrink-0 text-ink/40 transition-transform group-open:rotate-180 dark:text-light/40"
                  />
                </summary>
                <ul className="mt-4 grid gap-2 pl-13 text-sm text-ink/70 dark:text-light/70">
                  {q.details.map((d, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-dark dark:bg-accent" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </details>
            )
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-ink/40 dark:text-light/40">
          <span className="font-mono">Español</span>·<span className="font-mono">English (Full Professional)</span>
        </div>
      </div>
    </section>
  )
}