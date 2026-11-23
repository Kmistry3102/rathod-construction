"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (step: number) => setIndex((value) => (value + step + total) % total);

  return (
    <div
      className="relative rounded-[2rem] border border-grey-soft bg-white p-8 sm:p-12 lg:p-14"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <Quote aria-hidden className="size-12 fill-orange/10 text-orange" strokeWidth={1.25} />

      <div aria-live="polite" className="mt-8 min-h-80 sm:min-h-64">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <StarRating rating={current.rating} />
            <blockquote className="mt-6 font-display text-xl leading-relaxed font-medium tracking-tight text-navy-deep sm:text-2xl lg:text-[1.65rem]">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Avatar name={current.name} image={current.image} />
              <span>
                <span className="block font-display font-semibold text-navy-deep">{current.name}</span>
                <span className="block text-sm text-slate">
                  {current.role}, {current.company}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-grey-soft pt-8">
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setIndex(dotIndex)}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-500",
                  dotIndex === index ? "w-8 bg-orange" : "w-1.5 bg-grey-soft hover:bg-slate",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            { step: -1, label: "Previous testimonial", Icon: ArrowLeft },
            { step: 1, label: "Next testimonial", Icon: ArrowRight },
          ].map(({ step, label, Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => go(step)}
              aria-label={label}
              className="inline-flex size-12 items-center justify-center rounded-full border border-grey-soft text-navy-deep transition-all duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white"
            >
              <Icon aria-hidden className="size-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
