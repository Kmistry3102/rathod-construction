"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honours the visitor's "reduce motion" preference across every animation. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
