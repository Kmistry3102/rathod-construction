import type { SectionId } from "@/types";

/**
 * Smoothly scrolls to a homepage section (instantly for reduced-motion users)
 * and records it in the URL hash without adding history entries. Section
 * elements carry `scroll-margin-top`, so the sticky header never covers them.
 */
export function scrollToSection(id: SectionId) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  const hash = id === "top" ? window.location.pathname : `#${id}`;
  window.history.replaceState(null, "", hash);
}
