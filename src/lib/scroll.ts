const NAV_SELECTOR = 'nav[data-site-nav="true"]';
const DEFAULT_NAV_HEIGHT = 64;
const EXTRA_OFFSET = 8;

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const nav = document.querySelector(NAV_SELECTOR) as HTMLElement | null;
  const navHeight = nav?.offsetHeight ?? DEFAULT_NAV_HEIGHT;
  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    navHeight -
    EXTRA_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
