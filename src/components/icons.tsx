import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps): IconProps => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  ...props,
})

export const SunIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M5.6 18.4l.7-.7M17.7 6.3l.7-.7" />
  </svg>
)

export const MoonIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

export const GitHubIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.5}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.3 11.3 0 0 0-6 0C7.3 2.3 6.3 2.6 6.3 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.9 9c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />
  </svg>
)

export const LinkedInIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.5}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c1 .3 2 .6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const ArrowUpIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const DownloadIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export const GradCapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
  </svg>
)

export const CloudIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.3A4 4 0 0 0 6 19h11.5z" />
  </svg>
)

export const LanguageIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 8 6 6M4 14l6-6 2-3M2 12h7M12 4l2 3 6 9M16 9l-2-3-6 9" />
    <path d="M14 21h6M17 4v17" />
  </svg>
)

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
)

export const SendIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </svg>
)

export const PaletteIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="6.5" cy="11.5" r="1.4" />
    <circle cx="9" cy="7.5" r="1.4" />
    <circle cx="14.5" cy="7.5" r="1.4" />
    <circle cx="17.5" cy="11.5" r="1.4" />
    <path d="M12 22a3 3 0 0 0 0-6 2 2 0 0 1 2-2h3a3 3 0 0 0 3-3" />
  </svg>
)