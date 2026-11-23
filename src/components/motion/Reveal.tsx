"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/components/motion/easing";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  /** Vertical distance in px the content rises while fading in. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
  /** Animate on mount (above the fold) instead of on entering the viewport. */
  onMount?: boolean;
}

/** Fade-up reveal used for section content. */
export function Reveal({ children, delay = 0, y = 24, className, as = "div", onMount }: RevealProps) {
  const Component = motion[as];
  const target = { opacity: 1, y: 0 };
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "0px 0px -8% 0px" } })}
      transition={{ duration: 1, delay, ease: easeOutExpo }}
    >
      {children}
    </Component>
  );
}
