import { profile, currentlyAt, roleConstellation } from "@/data/content";
import { PillLink } from "./PillLink";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  DownloadIcon,
  ArrowRightIcon,
} from "./icons";
import { analytics } from "@/lib/analytics";
import { scrollToSection } from "@/lib/scroll";

const handleResumeHeroClick = () => analytics.resumeDownload("hero");
const handleSocialClick = (target: "github" | "linkedin" | "email") =>
  analytics.socialClick(target);

export function Hero() {
  return (
    <section className="relative min-h-svh flex items-center pt-20 pb-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-light-border bg-light-soft px-3 py-1 text-xs font-medium text-ink/70 dark:border-ink-border dark:bg-ink-soft dark:text-light/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {profile.first}{" "}
              <span className="text-accent-dark dark:text-accent">
                {profile.last}
              </span>
            </h1>

            <p className="mt-4 text-lg font-medium text-ink/80 dark:text-light/80">
              {profile.title}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink/60 dark:text-light/60">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-light/40">
                Currently
              </span>
              <PillLink mention={currentlyAt} />
            </div>

            <p className="mt-5 max-w-xl text-base text-ink/60 dark:text-light/60 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="btn-primary"
              >
                View Projects
                <ArrowRightIcon width={16} height={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleResumeHeroClick}
                className="btn-ghost"
              >
                <DownloadIcon width={16} height={16} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="btn-ghost"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-mono uppercase tracking-widest text-ink/40 dark:text-light/40">
                Connect
              </p>
              <div className="flex items-center gap-3">
                <SocialLink
                  href={profile.github}
                  label="GitHub"
                  icon={<GitHubIcon width={18} height={18} />}
                  onClick={() => handleSocialClick("github")}
                />
                <SocialLink
                  href={profile.linkedin}
                  label="LinkedIn"
                  icon={<LinkedInIcon width={18} height={18} />}
                  onClick={() => handleSocialClick("linkedin")}
                />
                <SocialLink
                  href={`mailto:${profile.email}`}
                  label="Email"
                  icon={<MailIcon width={18} height={18} />}
                  onClick={() => handleSocialClick("email")}
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in md:justify-self-end">
            <div
              tabIndex={0}
              aria-label="Hover or focus to see roles"
              className="group relative grid justify-items-center gap-4 focus:outline-none"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-accent/15 blur-2xl scale-125" />
                <img
                  src="/avatar.png"
                  alt={`${profile.name} — Software Engineer`}
                  width={224}
                  height={224}
                  loading="eager"
                  className="h-56 w-56 rounded-full border border-light-border object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] dark:border-ink-border"
                />

                <div
                  className="absolute inset-x-0 top-full mt-4 flex flex-col items-center gap-2 pointer-events-none"
                  aria-hidden="true"
                >
                  {roleConstellation.map((role, i) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-1.5 rounded-full border border-light-border bg-light-card/95 px-2.5 py-1 text-[11px] font-medium text-ink/70 shadow-sm backdrop-blur opacity-0 scale-90 transition-all duration-300 ease-out dark:border-ink-border dark:bg-ink-card/95 dark:text-light/70 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-dark dark:bg-accent" />
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-light/60">
                  <MapPinIcon width={14} height={14} />
                  {profile.location}
                  <span className="ml-1">{"🇦🇷"}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-light/60">
                  <ClockIcon width={14} height={14} />
                  {profile.timezone}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-ink/40 dark:text-light/40">
          <span className="text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-scroll-cue"
          >
            <path
              d="M8 1v18M2 13l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
  onClick,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-light-border text-ink/70 transition-colors hover:bg-light-soft hover:text-ink dark:border-ink-border dark:text-light/70 dark:hover:bg-ink-soft dark:hover:text-light"
    >
      {icon}
    </a>
  );
}
