"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/components/motion/easing";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

/** One centred quote at a time, switched with small dot controls. */
export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Client testimonials" className="text-center">
      <div aria-live="polite" className="flex min-h-[11rem] items-center justify-center sm:min-h-[9rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <blockquote className="mx-auto max-w-2xl font-display text-2xl leading-[1.4] font-light tracking-[-0.015em] text-navy-deep sm:text-[1.75rem]">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-display font-semibold text-navy-deep">{current.name}</span>
              <span className="text-slate">
                {" "}
                · {current.role}, {current.company}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-1" role="group" aria-label="Choose testimonial">
        {testimonials.map((testimonial, dot) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setIndex(dot)}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-pressed={dot === index}
            className="flex h-8 items-center px-1.5"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-500 ease-premium",
                dot === index ? "w-6 bg-orange" : "w-1.5 bg-navy-deep/25 hover:bg-navy-deep/50",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
