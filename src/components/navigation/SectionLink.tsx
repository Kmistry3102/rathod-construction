"use client";

import type { ComponentProps, MouseEvent } from "react";
import { scrollToSection } from "@/lib/scroll";
import type { SectionId } from "@/types";

interface SectionLinkProps extends Omit<ComponentProps<"a">, "href"> {
  section: SectionId;
  /** Runs before scrolling, e.g. to close the mobile menu. */
  onNavigate?: () => void;
}

/**
 * In-page anchor to a homepage section. It is a real `#id` link, so it works
 * without JavaScript; with JavaScript it scrolls smoothly after `onNavigate`
 * has had a frame to release any scroll lock.
 */
export function SectionLink({ section, onNavigate, onClick, children, ...props }: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    onNavigate?.();
    requestAnimationFrame(() => scrollToSection(section));
  };

  return (
    <a href={section === "top" ? "#top" : `#${section}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
