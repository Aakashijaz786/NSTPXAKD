const NAVBAR_HEIGHT = 72;

export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}
