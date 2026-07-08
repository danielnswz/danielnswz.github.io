import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from './icons'
import { analytics } from '@/lib/analytics'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const handleClick = () => {
    const next = isDark ? 'light' : 'dark'
    toggle()
    analytics.themeToggle(next)
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-light-border text-ink/70 hover:bg-light-soft hover:text-ink transition-colors dark:border-ink-border dark:text-light/70 dark:hover:bg-ink-soft dark:hover:text-light"
    >
      {isDark ? <SunIcon width={18} height={18} /> : <MoonIcon width={18} height={18} />}
    </button>
  )
}