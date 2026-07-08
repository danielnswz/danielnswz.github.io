import { useState } from 'react'
import { profile } from '@/data/content'
import { MailIcon, GitHubIcon, LinkedInIcon, SendIcon } from './icons'
import { SectionHeader } from './SectionHeader'
import { analytics } from '@/lib/analytics'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')
    const body = `Hi Daniel,%0D%0A%0D%0A${message}%0D%0A%0D%0A— ${name} (${email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || 'Hello from your portfolio',
    )}&body=${body}`
    analytics.contactSubmit(subject || '(no subject)', message.length > 0)
    setStatus('sent')
    form.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          num="06"
          title="Contact"
          subtitle="Let's work together"
        />
        <p className="-mt-6 mb-10 max-w-2xl text-base text-ink/60 dark:text-light/60">
          I'm open to full-time roles, contract engagements, and meaningful collaborations. Drop a message and I'll get back to you within 24 hours.
        </p>

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-3 self-start">
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<MailIcon width={18} height={18} />}
              label="Email"
              value={profile.email}
              onClick={() => analytics.socialClick('email')}
            />
            <ContactLink
              href={profile.linkedin}
              icon={<LinkedInIcon width={18} height={18} />}
              label="LinkedIn"
              value={profile.linkedinHandle}
              onClick={() => analytics.socialClick('linkedin')}
            />
            <ContactLink
              href={profile.github}
              icon={<GitHubIcon width={18} height={18} />}
              label="GitHub"
              value={profile.githubHandle}
              onClick={() => analytics.socialClick('github')}
            />

            <div className="card mt-2 p-5">
              <p className="inline-flex items-center gap-2 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </p>
              <p className="mt-2 text-sm text-ink/60 dark:text-light/60">
                Open to full-time and contract roles in Full-Stack, Distributed Systems, and Cloud. Based in Argentina, working remote and open to relocation.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="card grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" type="text" autoComplete="name" required />
              <Field label="Email" name="email" placeholder="you@email.com" type="email" autoComplete="email" required />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" type="text" required />
            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-y rounded-lg border border-light-border bg-light-card px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:border-ink-border dark:bg-ink-card dark:text-light dark:placeholder:text-light/40 dark:focus-visible:ring-offset-ink"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary justify-self-start"
            >
              <SendIcon width={16} height={16} />
              {status === 'sent' ? 'Opening mail…' : 'Send Message'}
            </button>
            <p className="text-xs text-ink/50 dark:text-light/50">
              Opens your email client pre-filled. For direct contact, email me at{' '}
              <a href={`mailto:${profile.email}`} className="link-quiet">
                {profile.email}
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  icon,
  label,
  value,
  onClick,
}: {
  href: string
  icon: React.ReactNode
  label: string
  value: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className="card flex items-center gap-3 p-4 transition-colors hover:border-accent/60"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent-dark dark:text-accent">
        {icon}
      </span>
      <div className="grid">
        <p className="text-xs text-ink/50 dark:text-light/50">{label}</p>
        <p className="text-sm font-medium link-quiet break-all">{value}</p>
      </div>
    </a>
  )
}

function Field({
  label,
  name,
  placeholder,
  type,
  required,
  autoComplete,
}: {
  label: string
  name: string
  placeholder: string
  type: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-accent-dark dark:text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-light-border bg-light-card px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:border-ink-border dark:bg-ink-card dark:text-light dark:placeholder:text-light/40 dark:focus-visible:ring-offset-ink"
      />
    </div>
  )
}