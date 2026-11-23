"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easeOutExpo } from "@/components/motion/easing";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

export interface ExplorerService {
  slug: string;
  title: string;
  summary: string;
  image: ImageAsset;
}

/**
 * Index-and-preview: hovering, focusing or selecting a service crossfades
 * its photograph. Built as accessible tabs (arrow keys move between them).
 */
export function ServicesExplorer({ services }: { services: ExplorerService[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = services[active];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + services.length) % services.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
      {/* Preview */}
      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative aspect-4/3 overflow-hidden bg-beige lg:order-last lg:col-span-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            aria-hidden={index !== active}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === active ? 1 : 0, scale: index === active ? 1 : 1.03 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-navy-deep/80 px-6 py-5 text-white backdrop-blur-[2px] sm:px-7">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <p className="font-display text-lg">{current.title}</p>
            <p className="mt-1 text-sm text-white/70">{current.summary}</p>
          </motion.div>
        </div>
      </div>

      {/* Index */}
      <div role="tablist" aria-label="Services" aria-orientation="vertical" className="border-t border-line lg:col-span-6">
        {services.map((service, index) => {
          const selected = index === active;
          return (
            <button
              key={service.slug}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onKeyDown={onKeyDown}
              className="group flex w-full items-center gap-6 border-b border-line py-5 text-left"
            >
              <span className={cn("w-6 shrink-0 font-display text-xs transition-colors", selected ? "text-orange" : "text-slate")}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 font-display text-xl font-normal tracking-[-0.015em] transition-[color,translate] duration-500 ease-premium sm:text-2xl",
                  selected ? "translate-x-1.5 text-navy-deep" : "text-slate group-hover:text-navy-deep",
                )}
              >
                {service.title}
              </span>
              <ArrowRight
                aria-hidden
                strokeWidth={1.5}
                className={cn(
                  "size-5 shrink-0 transition-all duration-500 ease-premium",
                  selected ? "translate-x-0 text-orange opacity-100" : "-translate-x-2 text-slate opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
