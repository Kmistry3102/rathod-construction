"use client";

import Image from "next/image";
import { useCallback, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { easeOutExpo } from "@/components/motion/easing";
import { useProjectFilter } from "@/features/projects/projectFilter";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;
const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Cinematic showcase: one project fills a large stage (slow zoom, crossfade)
 * with its details over the photo, and a thumbnail strip below picks between
 * them. Advances when the active thumbnail's progress line fills; hovering or
 * focusing pauses it, and it stays put for reduced motion. Swipe on touch.
 */
export function ProjectsShowcase({ projects: allProjects, heading }: { projects: Project[]; heading: ReactNode }) {
  const filter = useProjectFilter();
  const projects = allProjects.filter((project) => project.status === filter);
  // The selection belongs to one filter; switching filters starts again at the first project.
  const [selection, setSelection] = useState({ filter, index: 0 });
  const active = selection.filter === filter ? selection.index : 0;
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = projects.length;
  const current = projects[active];

  const setActive = useCallback((index: number) => setSelection({ filter, index }), [filter]);
  const go = useCallback((step: number) => setActive((active + step + total) % total), [active, total, setActive]);

  if (!current) return heading;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {heading}

      {/* Stage */}
      <motion.div
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 50 && Math.abs(info.offset.x) > Math.abs(info.offset.y)) go(info.offset.x < 0 ? 1 : -1);
        }}
        className="relative mt-8 h-[clamp(20rem,calc(100svh-var(--header-height)-21rem),36rem)] touch-pan-y overflow-hidden rounded-xl bg-navy sm:mt-10"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={current.slug}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduceMotion ? 1 : 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000 + 1.5, ease: "linear" }}
            >
              <Image
                src={current.image.src}
                alt={current.image.alt}
                fill
                draggable={false}
                priority={active === 0}
                sizes="(min-width: 1400px) 86rem, 100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/25 to-navy-deep/10" />
        <div aria-hidden className="absolute inset-0 bg-linear-to-r from-navy-deep/50 to-transparent to-60%" />

        {/* Oversized index */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-5 font-display text-[4.5rem] leading-none font-light tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.45)] select-none sm:top-6 sm:right-8 sm:text-[7rem]"
        >
          {pad(active + 1)}
        </span>

        {/* Details */}
        <div aria-live={paused ? "polite" : "off"} className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="text-white"
            >
              <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.24em] uppercase backdrop-blur-sm">
                {current.category}
                <span aria-hidden className="mx-2 text-white/40">·</span>
                <span className={current.status === "ongoing" ? "text-orange" : undefined}>
                  {current.status === "ongoing" ? "Ongoing" : "Completed"}
                </span>
              </span>
              <h3 className="mt-4 max-w-2xl font-display text-[1.75rem] leading-[1.1] font-normal tracking-[-0.025em] sm:text-[2.5rem] lg:text-[3rem]">
                {current.title}
              </h3>
              <dl className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Location</dt>
                  <MapPin aria-hidden strokeWidth={1.5} className="size-4 text-orange" />
                  <dd>{current.location}</dd>
                </div>
                <span aria-hidden className="hidden h-3 w-px bg-white/30 sm:block" />
                <div className="flex items-center gap-2">
                  <dt className="text-white/50">{current.status === "completed" ? "Completed" : "Handover"}</dt>
                  <dd className="tabular-nums">{current.year}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Thumbnail strip */}
      <div
        className="mt-4 grid gap-2 sm:mt-5 sm:gap-4"
        style={{ gridTemplateColumns: `repeat(${Math.max(total, 4)}, minmax(0, 1fr))` }}
        role="group"
        aria-label="Choose project"
      >
        {projects.map((project, index) => {
          const selected = index === active;
          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${project.title}`}
              aria-pressed={selected}
              className="group min-w-0 text-left"
            >
              <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/15">
                {index < active && <span className="absolute inset-0 bg-white/50" />}
                {selected && (
                  <span
                    key={`${filter}-${active}`}
                    className={cn("absolute inset-0 origin-left bg-orange", !reduceMotion && "animate-progress")}
                    onAnimationEnd={() => go(1)}
                    style={{
                      ["--progress-duration" as string]: `${AUTOPLAY_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </span>
              <span className="mt-3 flex items-center gap-3">
                <span
                  className={cn(
                    "relative block aspect-4/3 w-full shrink-0 overflow-hidden rounded-md transition-opacity duration-500 ease-premium lg:w-16",
                    selected ? "opacity-100" : "opacity-45 group-hover:opacity-80",
                  )}
                >
                  <Image src={project.image.src} alt="" fill sizes="(min-width: 1024px) 4rem, 16vw" className="object-cover" />
                </span>
                <span className="hidden min-w-0 lg:block">
                  <span className={cn("block font-display text-[0.7rem] tabular-nums", selected ? "text-orange" : "text-white/45")}>
                    {pad(index + 1)}
                  </span>
                  <span
                    className={cn(
                      "block truncate text-sm transition-colors duration-500",
                      selected ? "text-white" : "text-white/55 group-hover:text-white/85",
                    )}
                  >
                    {project.title}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
