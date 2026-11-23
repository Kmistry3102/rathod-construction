"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  /** Vertical offset in px the element travels while fading in. */
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}

/** Fades and lifts its children into view once, as they enter the viewport. */
export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
