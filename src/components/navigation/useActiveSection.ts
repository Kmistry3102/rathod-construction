"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/types";

/**
 * Scroll-spy: returns the section currently crossing the reading line
 * (a band just above the middle of the viewport).
 */
export function useActiveSection(ids: SectionId[]): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
