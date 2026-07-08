import { projects } from '@/data/content'
import type { ProjectStatus } from '@/data/content'
import { ChevronDownIcon, ArrowRightIcon } from './icons'
import { SectionHeader } from './SectionHeader'

const statusStyle: Record<ProjectStatus, string> = {
  Live: 'text-emerald-500',
  Featured: 'text-accent-dark dark:text-accent',
  Shipped: 'text-sky-500',
  Piloted: 'text-amber-500',
}

const MAX_STACK_VISIBLE = 3

export function Projects() {
  return (
    <section id="projects" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader num="03" title="Projects" subtitle="Systems I've shipped" />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => {
            const visible = p.stack.slice(0, MAX_STACK_VISIBLE)
            const extra = p.stack.length - visible.length
            return (
              <details key={p.name} className="card group open:bg-light-soft open:dark:bg-ink-soft/40 p-5">
                <summary className="cursor-pointer list-none marker:content-none">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${statusStyle[p.status].replace('text-', 'bg-')}`} aria-hidden />
                        <span className={`text-xs font-mono font-medium ${statusStyle[p.status]}`}>
                          {p.status}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold">{p.name}</h3>
                      <p className="text-sm text-ink/60 dark:text-light/60">{p.tagline}</p>
                    </div>
                    <ChevronDownIcon
                      width={18}
                      height={18}
                      className="shrink-0 text-ink/40 transition-transform group-open:rotate-180 dark:text-light/40"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {visible.map((t) => (
                      <span key={t} className="chip font-mono">
                        {t}
                      </span>
                    ))}
                    {extra > 0 && (
                      <span className="chip font-mono">+{extra}</span>
                    )}
                  </div>
                </summary>

                <div className="mt-4 grid gap-3 text-sm text-ink/70 dark:text-light/70">
                  <p>{p.description}</p>
                  <ul className="grid gap-2">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="relative pl-5">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-dark dark:bg-accent" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link-quiet inline-flex items-center gap-1 pt-1 text-sm font-medium"
                    >
                      Visit
                      <ArrowRightIcon width={14} height={14} />
                    </a>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}