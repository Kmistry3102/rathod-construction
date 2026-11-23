"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { easeOutExpo } from "@/components/motion/easing";

interface LineRevealProps {
  /** Each entry is one visual line; lines fade up gently in sequence. */
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  id?: string;
  delay?: number;
  /** Animate on mount (above the fold) instead of on entering the viewport. */
  onMount?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({ transition: { staggerChildren: 0.1, delayChildren: delay } }),
};

const line: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
};

/** Understated headline entrance: each line fades in with a slight upward movement. */
export function LineReveal({ lines, as = "h2", className, id, delay = 0, onMount }: LineRevealProps) {
  const Tag = motion[as];
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "0px 0px -8% 0px" } };

  return (
    <Tag id={id} className={className} initial="hidden" custom={delay} variants={container} {...trigger}>
      {lines.map((content, index) => (
        <motion.span key={index} variants={line} className="block">
          {content}
        </motion.span>
      ))}
    </Tag>
  );
}
