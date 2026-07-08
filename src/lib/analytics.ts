declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

interface AnalyticsEvent {
  name: string
  params?: Record<string, unknown>
}

type EventSender = (event: AnalyticsEvent) => void

const senders: EventSender[] = [
  (event) => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('event', event.name, event.params)
  },
]

export function registerAnalyticsSender(sender: EventSender) {
  senders.push(sender)
}

function track(event: AnalyticsEvent) {
  for (const sender of senders) {
    try {
      sender(event)
    } catch (err) {
      console.warn('[analytics] sender failed:', err)
    }
  }
}

export const analytics = {
  resumeDownload(source: 'nav' | 'hero' | 'contact') {
    track({ name: 'resume_download', params: { source } })
  },

  socialClick(target: 'github' | 'linkedin' | 'email') {
    track({ name: 'social_click', params: { target } })
  },

  experienceExpand(company: string) {
    track({ name: 'experience_expand', params: { company } })
  },

  projectExpand(name: string) {
    track({ name: 'project_expand', params: { name } })
  },

  projectVisit(name: string) {
    track({ name: 'project_visit', params: { name } })
  },

  contactSubmit(subject: string, hasMessage: boolean) {
    track({ name: 'contact_submit', params: { subject, has_message: String(hasMessage) } })
  },

  themeToggle(theme: 'light' | 'dark') {
    track({ name: 'theme_toggle', params: { theme } })
  },
} as const