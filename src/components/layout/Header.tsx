"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, quoteCta, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Transient UI: never restore an open menu when this tree is hidden/re-shown.
  useLayoutEffect(() => () => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled || menuOpen ? "shadow-[0_1px_0_0_var(--brand-grey-soft),0_12px_32px_-24px_rgb(16_51_66/0.35)]" : "",
      )}
    >
      <div className="mx-auto flex h-(--header-height) w-full max-w-(--container-max) items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Logo preload onNavigate={closeMenu} className="h-14" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-3.5 py-2 font-display text-[0.9rem] font-medium transition-colors duration-300",
                      "after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-orange after:transition-transform after:duration-300",
                      active
                        ? "text-navy-deep after:scale-x-100"
                        : "text-slate hover:text-navy-deep after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 font-display text-sm font-semibold text-navy-deep transition-colors hover:text-orange 2xl:inline-flex"
          >
            <Phone aria-hidden className="size-4 text-orange" />
            {siteConfig.contact.phone}
          </a>
          <ButtonLink href={quoteCta.href} withArrow className="hidden sm:inline-flex">
            {quoteCta.label}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-grey-soft text-navy-deep transition-colors hover:border-navy-deep xl:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-(--header-height) bottom-0 overflow-y-auto border-t border-grey-soft bg-white xl:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-(--container-max) flex-col px-5 py-8 sm:px-8">
              <ul className="flex flex-col">
                {mainNav.map((item, index) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index + 0.05, duration: 0.4 }}
                      className="border-b border-grey-soft"
                    >
                      <Link
                        href={item.href}
                        onNavigate={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
                          active ? "text-orange" : "text-navy-deep",
                        )}
                      >
                        {item.label}
                        <span className="font-sans text-xs font-medium text-slate">0{index + 1}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-6 pt-10">
                <ButtonLink href={quoteCta.href} onNavigate={closeMenu} size="lg" withArrow className="w-full sm:hidden">
                  {quoteCta.label}
                </ButtonLink>
                <div className="grid gap-3 text-sm text-slate sm:grid-cols-2">
                  <a href={siteConfig.contact.phoneHref} className="inline-flex items-center gap-3 hover:text-navy-deep">
                    <Phone aria-hidden className="size-4 text-orange" /> {siteConfig.contact.phone}
                  </a>
                  <a href={siteConfig.contact.emailHref} className="inline-flex items-center gap-3 hover:text-navy-deep">
                    <Mail aria-hidden className="size-4 text-orange" /> {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
