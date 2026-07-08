import { workArchive } from '@/data/content'
import type { WorkArchiveItem } from '@/data/content'
import { ArrowRightIcon, GitHubIcon } from './icons'
import { SectionHeader } from './SectionHeader'

const categoryColor: Record<WorkArchiveItem['category'], string> = {
  engineering: 'text-sky-500',
  architecture: 'text-violet-500',
  cloud: 'text-emerald-500',
  mobile: 'text-amber-500',
  tooling: 'text-rose-500',
}

const categoryDot: Record<WorkArchiveItem['category'], string> = {
  engineering: 'bg-sky-500',
  architecture: 'bg-violet-500',
  cloud: 'bg-emerald-500',
  mobile: 'bg-amber-500',
  tooling: 'bg-rose-500',
}

const kindLabel: Record<WorkArchiveItem['kind'], string> = {
  internal: 'Internal',
  live: 'Live',
  'open-source': 'Open Source',
}

export function WorkArchive() {
  return (
    <section id="work" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader num="02" title="Work" subtitle="Selected work, by year." />

        <div className="grid divide-y divide-light-border dark:divide-ink-border">
          {workArchive.map((item) => {
            const externalUrl = item.url ? item.url : null
            const Tag = externalUrl ? 'a' : 'div'
            const externalProps = externalUrl
              ? { href: externalUrl, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <Tag
                key={`${item.year}-${item.title}`}
                {...externalProps}
                className="group grid items-start gap-4 py-5 sm:grid-cols-[5rem_1fr_auto] sm:gap-6 transition-colors sm:hover:bg-light-soft/40 sm:dark:hover:bg-ink-soft/30 sm:rounded-lg sm:px-4 sm:-mx-4"
              >
                <p className="font-mono text-sm text-ink/65 dark:text-light/65 pt-0.5 sm:text-right">
                  {item.year}
                </p>
                <div className="grid gap-1.5 min-w-0">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[item.category]}`} aria-hidden />
                    <span className={categoryColor[item.category]}>{item.category}</span>
                    <span className="text-ink/50 dark:text-light/50">·</span>
                    <span className="text-ink/65 dark:text-light/65">{kindLabel[item.kind]}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/60 dark:text-light/60 leading-relaxed">
                    {item.blurb}
                  </p>
                </div>
                {externalUrl && (
                  <span className="hidden sm:flex items-center justify-self-end pt-0.5 text-ink/60 transition-colors group-hover:text-accent dark:text-light/60 dark:group-hover:text-accent">
                    {item.kind === 'open-source' ? (
                      <GitHubIcon width={16} height={16} />
                    ) : (
                      <ArrowRightIcon width={16} height={16} />
                    )}
                  </span>
                )}
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}