import { skills } from '@/data/content'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section id="skills" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader num="04" title="Skills" subtitle="Tools of the trade" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.title} className="card p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-dark dark:text-accent">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span key={s} className="chip text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}