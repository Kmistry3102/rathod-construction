"use client";

import { motion } from "framer-motion";
import { easeInOutQuart } from "@/components/motion/easing";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  delay?: number;
  /** Light rule for dark backgrounds. */
  light?: boolean;
  /** Draw immediately rather than when scrolled into view. */
  onMount?: boolean;
}

/** Hairline rule that draws itself from left to right. */
export function Divider({ className, delay = 0, light, onMount }: DividerProps) {
  const target = { scaleX: 1 };
  return (
    <motion.div
      aria-hidden
      className={cn("h-px w-full origin-left", light ? "bg-white/20" : "bg-line", className)}
      initial={{ scaleX: 0 }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "0px 0px -5% 0px" } })}
      transition={{ duration: 1.4, delay, ease: easeInOutQuart }}
    />
  );
}
