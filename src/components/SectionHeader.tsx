interface Props {
  num: string
  title: string
  subtitle?: string
}

export function SectionHeader({ num, title, subtitle }: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-dark dark:text-accent">
        {num} / {title}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {subtitle ?? title}
      </h2>
    </div>
  )
}