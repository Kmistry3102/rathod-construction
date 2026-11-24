"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/components/motion/easing";
import { useIntroDone } from "@/lib/intro";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  /** Vertical distance in px the content rises while fading in. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
  /** Animate once the opening intro lifts (above the fold) instead of on entering the viewport. */
  onMount?: boolean;
}

/** Fade-up reveal used for section content. */
export function Reveal({ children, delay = 0, y = 24, className, as = "div", onMount }: RevealProps) {
  const Component = motion[as];
  const introDone = useIntroDone();
  const hidden = { opacity: 0, y };
  const target = { opacity: 1, y: 0 };
  return (
    <Component
      className={className}
      initial={hidden}
      {...(onMount ? { animate: introDone ? target : hidden } : { whileInView: target, viewport: { once: true, margin: "0px 0px -8% 0px" } })}
      transition={{ duration: 1, delay, ease: easeOutExpo }}
    >
      {children}
    </Component>
  );
}
