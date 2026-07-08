import type { CompanyMention } from '@/data/content'

interface PillLinkProps {
  mention: CompanyMention
  className?: string
}

export function PillLink({ mention, className = '' }: PillLinkProps) {
  const classes = [
    'inline-flex items-baseline gap-0.5 rounded-md px-1.5 py-0.5',
    'font-medium text-accent-dark dark:text-accent',
    'bg-accent/10 hover:bg-accent/20 transition-colors',
    'whitespace-nowrap text-[0.95em] align-baseline',
    className,
  ].join(' ')

  const content = (
    <>
      <span className="text-accent/60 dark:text-accent/60">@</span>
      <span>{mention.handle}</span>
    </>
  )

  if (mention.url) {
    return (
      <a
        href={mention.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${mention.name} (opens in new tab)`}
        className={classes}
      >
        {content}
      </a>
    )
  }
  return <span className={classes} aria-label={mention.name}>{content}</span>
}