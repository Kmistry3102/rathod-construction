"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

export interface AccordionService {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: ImageAsset;
}

/**
 * Expanding photo panels: the active service widens to show its title and
 * summary while the rest collapse to slim, labelled strips. Side by side on
 * large screens, stacked on smaller ones. Hover, focus or tap opens a panel;
 * arrow keys move between them.
 */
export function ServicesAccordion({ services }: { services: AccordionService[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + services.length) % services.length;
    setActive(next);
    document.getElementById(`${baseId}-trigger-${next}`)?.focus();
  };

  return (
    <ul className="flex h-[34rem] flex-col gap-2 sm:h-[38rem] lg:h-[min(62svh,34rem)] lg:flex-row">
      {services.map((service, index) => {
        const open = index === active;
        const number = String(index + 1).padStart(2, "0");
        return (
          <li
            key={service.slug}
            onMouseEnter={() => setActive(index)}
            className={cn(
              "relative min-h-0 min-w-0 overflow-hidden rounded-[12px] bg-navy-deep transition-[flex-grow] duration-700 ease-premium",
              open ? "grow-[6] lg:grow-[5]" : "grow",
            )}
            style={{ flexBasis: 0 }}
          >
            <Image
              src={service.image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn(
                "object-cover transition-[scale,filter] duration-1000 ease-premium",
                open ? "scale-100 grayscale-0" : "scale-110 grayscale-[60%]",
              )}
            />
            {/* Shade: flat when collapsed, a bottom gradient when open so the photo shows */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 transition-[background-color,opacity] duration-700 ease-premium",
                open ? "bg-navy-deep/0" : "bg-navy-deep/70",
              )}
            />
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/30 to-transparent transition-opacity duration-700 ease-premium",
                open ? "opacity-100" : "opacity-0",
              )}
            />

            <button
              id={`${baseId}-trigger-${index}`}
              type="button"
              aria-expanded={open}
              aria-controls={`${baseId}-body-${index}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onKeyDown={onKeyDown}
              className="absolute inset-0 z-10 cursor-pointer rounded-[12px] focus-visible:outline-offset-[-6px] focus-visible:outline-white"
            >
              <span className="sr-only">{service.title}</span>
            </button>

            {/* Collapsed label */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 flex items-center gap-4 px-5 text-white transition-opacity duration-500 ease-premium lg:flex-col lg:items-center lg:justify-between lg:px-0 lg:py-6",
                open ? "opacity-0" : "opacity-100 delay-200",
              )}
            >
              <span className="font-display text-xs text-orange">{number}</span>
              <span className="truncate font-display text-base tracking-[-0.01em] lg:rotate-180 lg:text-lg lg:[writing-mode:vertical-rl]">
                {service.shortTitle}
              </span>
            </div>

            {/* Expanded body */}
            <div
              id={`${baseId}-body-${index}`}
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col p-5 text-white transition-[opacity,translate] duration-700 ease-premium sm:p-7 lg:w-[30rem] lg:p-8",
                open ? "translate-y-0 opacity-100 delay-200" : "translate-y-4 opacity-0",
              )}
            >
              <span className="flex items-center gap-3 font-display text-xs text-white/70">
                <span className="text-orange">{number}</span>
                <span aria-hidden className="h-px w-8 bg-white/40" />
                <span>/ {String(services.length).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-4 font-display text-[1.375rem] leading-[1.2] font-normal tracking-[-0.02em] sm:text-[1.75rem]">
                {service.title}
              </h3>
              <p className="mt-2 max-w-sm text-[0.95rem] leading-[1.65] text-white/75">{service.summary}</p>
            </div>

            <ArrowUpRight
              aria-hidden
              strokeWidth={1.5}
              className={cn(
                "pointer-events-none absolute top-5 right-5 size-6 text-white transition-[opacity,rotate] duration-700 ease-premium sm:top-7 sm:right-7",
                open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0",
              )}
            />
          </li>
        );
      })}
    </ul>
  );
}
