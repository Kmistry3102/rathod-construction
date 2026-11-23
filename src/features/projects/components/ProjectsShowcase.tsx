"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { easeOutExpo } from "@/components/motion/easing";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_SECONDS = 6;
const SWIPE_THRESHOLD = 60;

/**
 * Cinematic project slider: one wide photograph at a time with a caption
 * panel and segmented progress. Auto-advances gently, pausing on hover,
 * focus, when off-screen, on request, and never for reduced-motion users.
 */
export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const total = projects.length;
  const current = projects[index];
  const autoplay = !reduceMotion && !userPaused;
  const running = autoplay && inView && !hovered && !focused;

  const go = (step: number) => setIndex((value) => (value + step + total) % total);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setFocused(false)}
    >
      {/* Stage */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={onDragEnd}
        className="relative aspect-4/5 cursor-grab touch-pan-y overflow-hidden bg-beige active:cursor-grabbing sm:aspect-16/9 lg:aspect-21/9"
      >
        {projects.map((project, slide) => (
          <motion.div
            key={project.slug}
            aria-hidden={slide !== index}
            className="pointer-events-none absolute inset-0"
            initial={false}
            animate={{ opacity: slide === index ? 1 : 0, scale: slide === index ? 1 : 1.04 }}
            transition={{ duration: 1.1, ease: easeOutExpo }}
          >
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              draggable={false}
              sizes="(min-width: 1440px) 1300px, 100vw"
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 max-w-[85%] bg-ivory px-6 py-5 sm:bottom-6 sm:left-6 sm:px-7 sm:py-6 lg:bottom-8 lg:left-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
              aria-live={running ? "off" : "polite"}
            >
              <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-orange uppercase">{current.category}</p>
              <h3 className="mt-2 font-display text-xl font-normal tracking-[-0.015em] text-navy-deep sm:text-2xl">
                {current.title}
              </h3>
              <p className="mt-1 text-sm text-slate">
                {current.location} · {current.year}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-5">
        <ol className="flex flex-1 gap-2" aria-label="Choose project">
          {projects.map((project, slide) => {
            const active = slide === index;
            return (
              <li key={project.slug} className="flex-1">
                <button
                  type="button"
                  onClick={() => setIndex(slide)}
                  aria-label={`Show ${project.title}`}
                  aria-current={active ? "true" : undefined}
                  className="group block w-full py-3"
                >
                  <span className="relative block h-px w-full overflow-hidden bg-line-strong transition-colors group-hover:bg-navy-deep/50">
                    {slide < index && <span className="absolute inset-0 bg-navy-deep/60" />}
                    {active && (
                      <span
                        key={`${index}-${autoplay}`}
                        onAnimationEnd={() => go(1)}
                        style={{ ["--progress-duration" as string]: `${AUTOPLAY_SECONDS}s` }}
                        className={cn(
                          "absolute inset-0 origin-left bg-orange",
                          autoplay ? "animate-progress" : "",
                          !running && "[animation-play-state:paused]",
                        )}
                      />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <p className="hidden shrink-0 font-display text-sm tabular-nums text-slate sm:block" aria-hidden>
          <span className="text-navy-deep">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
        </p>

        <div className="flex shrink-0 gap-2">
          {!reduceMotion && (
            <button
              type="button"
              onClick={() => setUserPaused((paused) => !paused)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              className="inline-flex size-11 items-center justify-center rounded-[10px] text-navy-deep transition-colors duration-300 hover:text-orange"
            >
              {userPaused ? <Play aria-hidden strokeWidth={1.5} className="size-4" /> : <Pause aria-hidden strokeWidth={1.5} className="size-4" />}
            </button>
          )}
          {[
            { step: -1, label: "Previous project", Icon: ArrowLeft },
            { step: 1, label: "Next project", Icon: ArrowRight },
          ].map(({ step, label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => go(step)}
              className="group inline-flex size-11 items-center justify-center rounded-[10px] border border-navy-deep/25 text-navy-deep transition-[background-color,border-color,color] duration-500 ease-premium hover:border-navy-deep hover:bg-navy-deep hover:text-white"
            >
              <Icon
                aria-hidden
                strokeWidth={1.5}
                className={cn(
                  "size-4 transition-transform duration-500 ease-premium",
                  step < 0 ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
