"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeInOutQuart } from "@/components/motion/easing";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/** Quiet unveiling for photographs: the frame opens upward as it enters view. */
export function ImageReveal({ children, className, delay = 0, as = "div" }: ImageRevealProps) {
  const Frame = motion[as];
  return (
    <Frame
      className={cn("relative overflow-hidden bg-beige", className)}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, delay, ease: easeInOutQuart }}
    >
      {children}
    </Frame>
  );
}
