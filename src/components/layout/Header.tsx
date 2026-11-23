"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { easeOutExpo } from "@/components/motion/easing";
import { SectionLink } from "@/components/navigation/SectionLink";
import { useActiveSection } from "@/components/navigation/useActiveSection";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, quoteCta, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const sectionIds = mainNav.map((item) => item.section);

export function Header() {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Lock page scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Transient UI: never restore an open menu when this tree is hidden and re-shown.
  useLayoutEffect(() => () => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="mx-auto flex h-(--header-height) w-full max-w-(--container-max) items-center gap-8 px-6 sm:px-10 lg:px-14"
      >
        <Logo eager onNavigate={closeMenu} className="h-12 sm:h-14" />

        <nav aria-label="Sections" className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => {
              const isActive = active === item.section;
              return (
                <li key={item.section} className="relative">
                  <SectionLink
                    section={item.section}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "group relative block py-2 text-[0.85rem] transition-colors duration-300",
                      isActive ? "text-navy-deep" : "text-slate hover:text-navy-deep",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-navy-deep/40 transition-transform duration-500 ease-premium group-hover:scale-x-100"
                    />
                  </SectionLink>
                  {isActive && (
                    <motion.span
                      aria-hidden
                      layoutId="nav-active"
                      transition={{ duration: 0.55, ease: easeOutExpo }}
                      className="absolute inset-x-0 bottom-0.5 h-px bg-orange"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <div className="hidden sm:block">
            <ButtonLink section={quoteCta.section}>{quoteCta.label}</ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex size-10 items-center justify-center xl:hidden"
          >
            <span aria-hidden className="relative block h-2.5 w-6">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-navy-deep transition-all duration-500 ease-premium",
                  menuOpen ? "top-1.25 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-navy-deep transition-all duration-500 ease-premium",
                  menuOpen ? "top-1.25 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="fixed inset-x-0 top-(--header-height) bottom-0 overflow-y-auto bg-ivory xl:hidden"
          >
            <nav aria-label="Sections" className="mx-auto flex min-h-full max-w-(--container-max) flex-col px-6 pt-6 pb-10 sm:px-10">
              <ul>
                {mainNav.map((item, index) => (
                  <motion.li
                    key={item.section}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.04, duration: 0.6, ease: easeOutExpo }}
                    className="border-b border-line"
                  >
                    <SectionLink
                      section={item.section}
                      onNavigate={closeMenu}
                      aria-current={active === item.section ? "location" : undefined}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span
                        className={cn(
                          "font-display text-2xl font-normal tracking-[-0.02em]",
                          active === item.section ? "text-orange" : "text-navy-deep",
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="text-xs text-slate">{String(index + 1).padStart(2, "0")}</span>
                    </SectionLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-auto space-y-6 pt-12"
              >
                <ButtonLink section={quoteCta.section} onNavigate={closeMenu} size="lg" className="w-full">
                  {quoteCta.label}
                </ButtonLink>
                <div className="grid gap-1.5 text-sm text-slate">
                  <a href={siteConfig.contact.phoneHref} className="hover:text-navy-deep">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={siteConfig.contact.emailHref} className="hover:text-navy-deep">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
