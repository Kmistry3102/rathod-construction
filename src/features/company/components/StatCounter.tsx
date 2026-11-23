"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
}

function formatStat(value: number, decimals: number, suffix: string) {
  return `${value.toFixed(decimals)}${suffix}`;
}

/** Counts up from zero the first time it scrolls into view. */
export function StatCounter({ value, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();
  const decimals = Number.isInteger(value) ? 0 : 1;

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = formatStat(latest, decimals, suffix);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, suffix]);

  // The final value is rendered on the server so it is correct without JavaScript.
  return <span ref={ref}>{formatStat(value, decimals, suffix)}</span>;
}
