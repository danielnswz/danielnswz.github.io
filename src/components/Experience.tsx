import { experience } from "@/data/content";
import { ChevronDownIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";
import { analytics } from "@/lib/analytics";

function handleToggle(expanded: boolean, company: string) {
  if (expanded) analytics.experienceExpand(company);
}

export function Experience() {
  return (
    <section id="experience" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          num="02"
          title="Experience"
          subtitle="Where I've built"
        />

        <div className="relative grid gap-6 pl-6 before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-light-border dark:before:bg-ink-border md:pl-8">
          {experience.map((job, i) => (
            <article key={i} className="relative">
              <span
                className="absolute -left-[1.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-light-card dark:bg-ink-card"
                aria-hidden
              />
              <details
                className="card accordion group open:bg-light-soft open:dark:bg-ink-soft/40 p-5 md:p-6"
                onToggle={(e) =>
                  handleToggle(
                    (e.currentTarget as HTMLDetailsElement).open,
                    job.company,
                  )
                }
              >
                <summary className="flex cursor-pointer flex-col gap-3 md:flex-row md:items-start md:justify-between marker:content-none list-none">
                  <div className="grid gap-1">
                    <h3 className="text-base font-semibold">{job.role}</h3>
                    <p className="text-sm text-accent-dark dark:text-accent">
                      {job.company}
                    </p>
                    <p className="text-xs text-ink/50 dark:text-light/50">
                      <span>{job.type}</span> · <span>{job.period}</span> ·{" "}
                      <span>{job.location}</span>
                    </p>
                  </div>
                  <ChevronDownIcon
                    width={18}
                    height={18}
                    className="shrink-0 text-ink/40 transition-transform group-open:rotate-180 dark:text-light/40"
                  />
                </summary>

                <div className="accordion-panel mt-4 grid gap-3">
                  <ul className="grid gap-2 text-sm text-ink/70 dark:text-light/70">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="relative pl-5">
                        <span
                          className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent-dark dark:bg-accent"
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((t) => (
                      <span key={t} className="chip font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
