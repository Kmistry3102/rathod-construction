"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion/easing";
import type { Testimonial } from "@/types";

const AUTOPLAY_MS = 6000;

/** Card tints from front to back, so the deck reads as layered paper. */
const tints = ["#ffffff", "#dfe5e7", "#b9c6cc"];

/**
 * Quotes as a stacked deck: the front card shows the full quote, the cards
 * behind peek out above it. The deck cycles on its own (paused on hover or
 * focus, off for reduced motion), or with a click on the front card.
 */
export function TestimonialDeck({ testimonials, heading }: { testimonials: Testimonial[]; heading: ReactNode }) {
  const total = testimonials.length;
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const next = () => setFront((f) => (f + 1) % total);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setTimeout(() => setFront((f) => (f + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [front, paused, reduceMotion, total]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16"
    >
      <div className="lg:col-span-5 lg:self-start">{heading}</div>

      {/* Deck */}
      <div aria-live={paused ? "polite" : "off"} className="relative h-[21rem] pt-10 sm:h-[18rem] lg:col-span-7">
        {testimonials.map((testimonial, index) => {
          const depth = (index - front + total) % total;
          const isFront = depth === 0;
          return (
            <motion.figure
              key={testimonial.name}
              aria-hidden={!isFront}
              onClick={isFront ? next : undefined}
              initial={false}
              animate={{
                y: depth * -18,
                scale: 1 - depth * 0.05,
                backgroundColor: tints[Math.min(depth, tints.length - 1)],
                zIndex: total - depth,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.8, ease: easeOutExpo }}
              className="absolute inset-x-0 bottom-0 top-10 flex origin-top cursor-pointer flex-col justify-between rounded-xl p-7 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)] sm:p-9"
            >
              <motion.div
                className="flex h-full flex-col justify-between gap-6"
                initial={false}
                animate={{ opacity: isFront ? 1 : 0 }}
                transition={{ duration: 0.5, delay: isFront ? 0.25 : 0 }}
              >
                <div>
                  <span aria-hidden className="block font-display text-[3.5rem] leading-[0.6] text-orange">
                    “
                  </span>
                  <blockquote className="mt-4 font-display text-[1.25rem] leading-[1.45] font-light tracking-[-0.015em] text-navy-deep sm:text-[1.5rem]">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-4 text-sm leading-snug">
                  <span aria-hidden className="h-px w-8 bg-orange" />
                  <span>
                    <span className="block font-display text-navy-deep">{testimonial.name}</span>
                    <span className="text-slate">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </motion.div>
            </motion.figure>
          );
        })}
      </div>
    </div>
  );
}
