"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "framer-motion";
import { easeInOutQuart } from "@/components/motion/easing";
import { siteConfig } from "@/data/site";
import { markIntroDone } from "@/lib/intro";

const SEEN_KEY = "rathod-intro-seen";
/** When the slabs start to slide away — the hero's own entrance begins here. */
const REVEAL_AT_MS = 4000;

const FLOORS = 6;
const FLOOR_H = 24;
const GROUND_Y = 220;
const JIB_Y = 46;
const BUILDING_TOP = GROUND_Y - FLOORS * FLOOR_H;
const SLABS = 6;
/** Gentle in-out curve for the drawing and fades, so nothing snaps. */
const easeInOutSine = [0.37, 0, 0.63, 1] as const;
/** Soft landing for floors and labels — settles rather than snaps. */
const easeOutCubic = [0.33, 1, 0.68, 1] as const;

/**
 * Opening intro, a construction site in line drawing: a tower crane is traced
 * on the navy drafting grid, floors are set one on top of another as the hook
 * rises with them, then the screen slides away as alternating floor slabs.
 * Plays once per browser session and is skipped for reduced-motion visitors
 * (and without JavaScript, via the <noscript> rule in the root layout).
 */
export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    const count = countRef.current;
    if (!root || !content || !count) return;

    const html = document.documentElement;
    const finish = () => {
      root.style.display = "none";
      html.style.overflow = "";
      markIntroDone();
    };

    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      // Storage unavailable (private mode etc.): just play the intro.
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    const complete = () => {
      // Remember only once it has actually played, so a re-run (e.g. Strict Mode) still shows it.
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Ignore: the intro will simply play again next time.
      }
      finish();
    };

    const q = <T extends Element>(selector: string) => Array.from(root.querySelectorAll<T>(selector));
    const grid = q<HTMLElement>("[data-intro=grid]");
    const lines = q<SVGPathElement>("[data-intro=line]");
    const floors = q<SVGGElement>("[data-intro=floor]");
    const cable = q<SVGRectElement>("[data-intro=cable]");
    const hook = q<SVGGElement>("[data-intro=hook]");
    const flag = q<SVGPathElement>("[data-intro=flag]");
    const labels = q<HTMLElement>("[data-intro=label]");
    const slabs = q<HTMLElement>("[data-intro=slab]");
    const leftSlabs = slabs.filter((_, i) => i % 2 === 0);
    const rightSlabs = slabs.filter((_, i) => i % 2 === 1);

    const floorsAt = 1.2;
    const floorStep = 0.22;
    const floorDuration = 0.6;
    const floorsSpan = floorStep * (FLOORS - 1) + floorDuration;
    const exitAt = floorsAt + floorsSpan + 0.45;
    // The hook starts just above the ground and rises with each new floor.
    const lowest = GROUND_Y - FLOOR_H - 18 - JIB_Y;
    const highest = BUILDING_TOP - 18 - JIB_Y;

    html.style.overflow = "hidden";
    const sequence = animate([
      [grid, { opacity: [0, 1] }, { duration: 0.9, ease: "easeOut" }],
      [labels, { opacity: [0, 1], y: [10, 0] }, { duration: 0.9, at: 0.2, delay: stagger(0.1), ease: easeOutCubic }],
      [lines, { strokeDashoffset: [1, 0] }, { duration: 1.15, at: 0.15, delay: stagger(0.07), ease: easeInOutSine }],
      [cable, { height: [0, lowest] }, { duration: 0.7, at: 0.5, ease: easeInOutSine }],
      [hook, { opacity: [0, 1], y: [0, lowest] }, { duration: 0.7, at: 0.5, ease: easeInOutSine }],
      [cable, { height: [lowest, highest] }, { duration: floorsSpan, at: floorsAt, ease: easeInOutSine }],
      [hook, { y: [lowest, highest] }, { duration: floorsSpan, at: floorsAt, ease: easeInOutSine }],
      [floors, { opacity: [0, 1], y: [-12, 0] }, { duration: floorDuration, at: floorsAt, delay: stagger(floorStep), ease: easeOutCubic }],
      [flag, { opacity: [0, 1], scaleY: [0, 1] }, { duration: 0.5, at: floorsAt + floorsSpan - 0.1, ease: easeOutCubic }],
      [content, { opacity: [1, 0], y: [0, -10] }, { duration: 0.45, at: exitAt, ease: easeInOutSine }],
      [leftSlabs, { x: ["0%", "-101%"] }, { duration: 1, at: exitAt + 0.35, delay: stagger(0.1, { from: "last" }), ease: easeInOutQuart }],
      [rightSlabs, { x: ["0%", "101%"] }, { duration: 1, at: exitAt + 0.42, delay: stagger(0.1, { from: "last" }), ease: easeInOutQuart }],
    ]);
    const counter = animate(0, FLOORS, {
      duration: floorsSpan,
      delay: floorsAt,
      ease: "linear",
      onUpdate: (value) => {
        count.textContent = String(Math.max(1, Math.ceil(value))).padStart(2, "0");
      },
    });
    const reveal = window.setTimeout(markIntroDone, REVEAL_AT_MS);
    let active = true;
    sequence.then(() => active && complete());

    return () => {
      // Stop without hiding: if the effect re-runs, the intro restarts cleanly.
      active = false;
      sequence.stop();
      counter.stop();
      window.clearTimeout(reveal);
      html.style.overflow = "";
    };
  }, []);

  const drawn = { strokeDasharray: 1, strokeDashoffset: 1 } as const;
  const ivory = "var(--brand-ivory)";
  const faint = "rgb(250 248 244 / 0.35)";

  return (
    <div ref={rootRef} id="intro-loader" aria-hidden className="fixed inset-0 z-100 overflow-hidden">
      {/* Floor slabs: together they form the backdrop, then slide out left and right. */}
      <div className="absolute inset-0 flex flex-col">
        {Array.from({ length: SLABS }, (_, i) => (
          <div key={i} data-intro="slab" className="-mb-px w-full flex-1 bg-navy-deep" />
        ))}
      </div>

      <div ref={contentRef} className="absolute inset-0">
        {/* Drafting grid */}
        <div
          data-intro="grid"
          className="absolute inset-0"
          style={{
            opacity: 0,
            backgroundImage:
              "linear-gradient(rgb(250 248 244 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(250 248 244 / 0.05) 1px, transparent 1px), linear-gradient(rgb(250 248 244 / 0.025) 1px, transparent 1px), linear-gradient(90deg, rgb(250 248 244 / 0.025) 1px, transparent 1px)",
            backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="absolute inset-x-6 top-6 flex justify-between text-[0.6rem] font-medium uppercase tracking-[0.3em] text-ivory/45 sm:inset-x-10 sm:top-9">
          <span data-intro="label" style={{ opacity: 0 }}>
            Site in progress
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6 flex justify-between text-[0.6rem] font-medium uppercase tracking-[0.3em] text-ivory/45 sm:inset-x-10 sm:bottom-9">
          <span data-intro="label" style={{ opacity: 0 }}>
            Precision
          </span>
          <span data-intro="label" style={{ opacity: 0 }}>
            Integrity
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <svg viewBox="0 0 260 240" className="h-48 w-auto overflow-visible sm:h-56" fill="none">
            {/* Ground */}
            <path data-intro="line" pathLength={1} d="M10 220 H250" stroke={faint} strokeWidth={1} style={drawn} />
            {/* Crane mast with lattice */}
            <path data-intro="line" pathLength={1} d="M196 220 V40 M206 220 V40" stroke={ivory} strokeWidth={1.1} style={drawn} />
            <path
              data-intro="line"
              pathLength={1}
              d="M196 220 L206 202 L196 184 L206 166 L196 148 L206 130 L196 112 L206 94 L196 76 L206 58 L196 40"
              stroke={faint}
              strokeWidth={0.75}
              style={drawn}
            />
            {/* Jib, counter-jib and ties */}
            <path data-intro="line" pathLength={1} d="M60 40 H244 M60 46 H244 M60 40 V46" stroke={ivory} strokeWidth={1.1} style={drawn} />
            <path
              data-intro="line"
              pathLength={1}
              d="M60 46 L70 40 L80 46 L90 40 L100 46 L110 40 L120 46 L130 40 L140 46 L150 40 L160 46 L170 40 L180 46 L190 40"
              stroke={faint}
              strokeWidth={0.75}
              style={drawn}
            />
            <path data-intro="line" pathLength={1} d="M201 40 V20 M201 20 L72 40 M201 20 L244 40" stroke={faint} strokeWidth={0.75} style={drawn} />
            <path data-intro="line" pathLength={1} d="M226 46 H244 V58 H226 Z" stroke="var(--brand-orange)" strokeWidth={1} style={drawn} />

            {/* Hook cable and hook, rising with the building */}
            <rect data-intro="cable" x={109.5} y={JIB_Y} width={1} height={0} fill={faint} />
            <g data-intro="hook" style={{ opacity: 0 }}>
              <rect x={105} y={JIB_Y - 3} width={10} height={4} fill={ivory} />
              <path d={`M110 ${JIB_Y} v4 a3 3 0 1 1 -3 3`} stroke="var(--brand-orange)" strokeWidth={1.2} />
            </g>

            {/* Floors set from the ground up */}
            {Array.from({ length: FLOORS }, (_, i) => {
              const y = GROUND_Y - FLOOR_H * (i + 1);
              return (
                <g key={i} data-intro="floor" style={{ opacity: 0 }}>
                  <rect x={80} y={y} width={60} height={FLOOR_H} fill="rgb(250 248 244 / 0.05)" stroke={ivory} strokeWidth={0.9} />
                  {[0, 1, 2].map((w) => (
                    <rect
                      key={w}
                      x={87 + w * 17}
                      y={y + 7}
                      width={12}
                      height={10}
                      fill={(i + w) % 3 === 1 ? "var(--brand-orange)" : "rgb(250 248 244 / 0.5)"}
                    />
                  ))}
                </g>
              );
            })}
            {/* Topping-out flag */}
            <path
              data-intro="flag"
              d={`M84 ${BUILDING_TOP} V${BUILDING_TOP - 18} L96 ${BUILDING_TOP - 14} L84 ${BUILDING_TOP - 10}`}
              stroke="var(--brand-orange)"
              fill="var(--brand-orange)"
              strokeWidth={1}
              strokeLinejoin="round"
              style={{ opacity: 0, transformBox: "fill-box", transformOrigin: "bottom" }}
            />
          </svg>

          <p
            data-intro="label"
            className="mt-8 flex items-baseline gap-2 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-ivory/55"
            style={{ opacity: 0 }}
          >
            Floor
            <span ref={countRef} className="font-display text-base tracking-[0.08em] text-orange tabular-nums">
              01
            </span>
            / {String(FLOORS).padStart(2, "0")}
          </p>
          <p
            data-intro="label"
            className="mt-4 font-display text-lg font-medium tracking-[0.02em] text-ivory sm:text-xl"
            style={{ opacity: 0 }}
          >
            {siteConfig.name}
          </p>
        </div>
      </div>
    </div>
  );
}
