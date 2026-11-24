"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const pad = (value: number) => String(value).padStart(2, "0");

const noopSubscribe = () => () => {};

/**
 * Swiper reads the clock while it builds itself, which Cache Components does
 * not allow during prerender. So the server (and hydration) render the same
 * cards as a plain row, and Swiper takes over once running in the browser.
 */
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * Horizontal project slider built on Swiper: a row of cards that runs off the
 * right edge of the page, dragged or swiped, or moved with the arrow buttons
 * and keyboard, with a thin progress line and a running counter.
 */
export function ProjectsShowcase({ projects, heading }: { projects: Project[]; heading: ReactNode }) {
  const isClient = useIsClient();
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [state, setState] = useState({ active: 0, progress: 0, start: true, end: false });

  const total = projects.length;

  const sync = (instance: SwiperInstance) =>
    setState({
      // At the far end the last card may not reach the left edge, so count it as reached.
      active: instance.isEnd ? total - 1 : instance.activeIndex,
      progress: Math.min(1, Math.max(0, instance.progress)),
      start: instance.isBeginning,
      end: instance.isEnd,
    });

  const controls = (
    <>
      <Counter active={state.active} total={total} />
      <Arrows
        start={state.start}
        end={state.end}
        onPrev={() => swiper?.slidePrev()}
        onNext={() => swiper?.slideNext()}
      />
    </>
  );

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        {heading}
        <div className="hidden shrink-0 items-center gap-5 sm:flex">{controls}</div>
      </div>

      {/* Bleeds to the right edge of the screen */}
      <div className="-mr-6 mt-8 sm:-mr-10 sm:mt-10 lg:-mr-14">
        {isClient ? (
          <Swiper
            modules={[A11y, Keyboard]}
            onSwiper={(instance) => {
              setSwiper(instance);
              sync(instance);
            }}
            onSlideChange={sync}
            onProgress={sync}
            onResize={sync}
            slidesPerView={1.2}
            spaceBetween={16}
            speed={800}
            grabCursor
            watchSlidesProgress
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ prevSlideMessage: "Previous project", nextSlideMessage: "Next project" }}
            breakpoints={{
              640: { slidesPerView: 2.15, spaceBetween: 24 },
              1024: { slidesPerView: 2.6, spaceBetween: 24 },
            }}
            aria-label="Featured projects"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.slug} className="group">
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Same widths and gaps as the Swiper breakpoints above, so nothing jumps on hand-over.
          <ul className="flex overflow-hidden">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="group mr-4 w-[calc((100%-3.2px)/1.2)] shrink-0 sm:mr-6 sm:w-[calc((100%-27.6px)/2.15)] lg:w-[calc((100%-38.4px)/2.6)]"
              >
                <ProjectCard project={project} index={index} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Progress, plus counter and arrows on phones */}
      <div className="mt-6 flex items-center gap-5 sm:mt-8">
        <span aria-hidden className="relative block h-px flex-1 overflow-hidden bg-line-strong">
          <span
            className="absolute inset-0 origin-left bg-orange transition-transform duration-700 ease-premium"
            style={{ transform: `scaleX(${Math.max(state.progress, 1 / total)})` }}
          />
        </span>
        <div className="flex shrink-0 items-center gap-4 sm:hidden">{controls}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="relative h-[clamp(14rem,calc(100svh-var(--header-height)-30rem),34rem)] overflow-hidden bg-beige">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          draggable={false}
          sizes="(min-width: 1024px) 36vw, (min-width: 640px) 46vw, 82vw"
          className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 bg-ivory px-2.5 py-1 font-display text-xs text-navy-deep tabular-nums">
          {pad(index + 1)}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-b border-line pb-4">
        <div className="min-w-0">
          <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-orange uppercase">{project.category}</p>
          <h3 className="mt-1.5 truncate font-display text-lg font-normal tracking-[-0.015em] text-navy-deep transition-colors duration-300 group-hover:text-orange sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate">
            {project.location} · {project.year}
          </p>
        </div>
        <ArrowRight
          aria-hidden
          strokeWidth={1.5}
          className="mt-6 size-5 shrink-0 -translate-x-1 text-slate opacity-0 transition-all duration-500 ease-premium group-hover:translate-x-0 group-hover:text-orange group-hover:opacity-100"
        />
      </div>
    </>
  );
}

function Counter({ active, total }: { active: number; total: number }) {
  return (
    <p aria-hidden className="font-display text-sm text-slate tabular-nums">
      <span className="text-navy-deep">{pad(active + 1)}</span> / {pad(total)}
    </p>
  );
}

function Arrows({ start, end, onPrev, onNext }: { start: boolean; end: boolean; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-2">
      {[
        { dir: -1, label: "Previous project", Icon: ArrowLeft, disabled: start, onClick: onPrev },
        { dir: 1, label: "Next project", Icon: ArrowRight, disabled: end, onClick: onNext },
      ].map(({ dir, label, Icon, disabled, onClick }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          disabled={disabled}
          onClick={onClick}
          className="group inline-flex size-11 items-center justify-center rounded-[10px] border border-navy-deep/25 text-navy-deep transition-[background-color,border-color,color,opacity] duration-500 ease-premium hover:border-navy-deep hover:bg-navy-deep hover:text-white disabled:pointer-events-none disabled:opacity-35"
        >
          <Icon
            aria-hidden
            strokeWidth={1.5}
            className={cn(
              "size-4 transition-transform duration-500 ease-premium",
              dir < 0 ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5",
            )}
          />
        </button>
      ))}
    </div>
  );
}
