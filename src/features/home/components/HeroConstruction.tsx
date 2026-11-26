"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

const FLOORS = 7;
const FLOOR_H = 32;
const GROUND_Y = 370;
const JIB_Y = 80;
const BUILDING_X = 60;
const BUILDING_W = 100;
/** Where the slab hangs while it travels: just under the trolley. */
const REST_Y = JIB_Y + 34;
const floorTop = (index: number) => GROUND_Y - FLOOR_H * (index + 1);

const easeInOutSine = [0.37, 0, 0.63, 1] as const;
const line = "var(--brand-navy-deep)";
const faint = "rgb(16 51 66 / 0.35)";
const orange = "var(--brand-orange)";
/** Fill behind solid shapes: the page's own ivory, so they read as cut-outs. */
const panel = "var(--brand-ivory)";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Hero illustration: a line-drawn building site set straight on the page.
 * A tower crane lowers one slab at a time onto the building, a flag tops it
 * out, then the site clears and it starts again. Reduced-motion visitors see
 * the finished building, still.
 */
export function HeroConstruction() {
  const reduceMotion = useReducedMotion();
  const [placed, setBuilt] = useState(0);
  const built = reduceMotion ? FLOORS : placed;
  const [cleared, setCleared] = useState(false);
  const slabY = useMotionValue(REST_Y);
  const slabOpacity = useMotionValue(0);
  const cableHeight = useTransform(slabY, (y) => Math.max(0, y - JIB_Y - 16));

  useEffect(() => {
    if (reduceMotion) return;
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        for (let i = 0; i < FLOORS && !cancelled; i++) {
          slabY.set(REST_Y);
          await animate(slabOpacity, 1, { duration: 0.25 });
          await animate(slabY, floorTop(i), { duration: 0.6 + (FLOORS - i) * 0.08, ease: easeInOutSine });
          if (cancelled) return;
          setBuilt(i + 1);
          slabOpacity.set(0);
          await animate(slabY, REST_Y, { duration: 0.5, ease: easeInOutSine });
        }
        await wait(2200);
        if (cancelled) return;
        setCleared(true);
        await wait(700);
        if (cancelled) return;
        setBuilt(0);
        setCleared(false);
        await wait(400);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [reduceMotion, slabY, slabOpacity]);

  const done = built === FLOORS;

  return (
    <div aria-hidden className="absolute inset-0">
      <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full -scale-x-100 sm:scale-x-100" fill="none">
        {/* Ground with dimension ticks */}
        <path d={`M20 ${GROUND_Y} H280`} stroke={line} strokeWidth={1.2} />
        {[40, 80, 120, 160, 200, 240].map((x) => (
          <path key={x} d={`M${x} ${GROUND_Y} v6`} stroke={faint} strokeWidth={0.8} />
        ))}

        {/* Tower crane */}
        <path d={`M218 ${GROUND_Y} V${JIB_Y - 2} M228 ${GROUND_Y} V${JIB_Y - 2}`} stroke={line} strokeWidth={1.2} />
        <path
          d={Array.from({ length: 16 }, (_, k) => `${k === 0 ? "M" : "L"}${k % 2 ? 228 : 218} ${GROUND_Y - k * 18}`).join(" ")}
          stroke={faint}
          strokeWidth={0.8}
        />
        <path d={`M40 ${JIB_Y} H272 M40 ${JIB_Y + 6} H272 M40 ${JIB_Y} V${JIB_Y + 6}`} stroke={line} strokeWidth={1.2} />
        <path
          d={Array.from({ length: 18 }, (_, k) => `${k === 0 ? "M" : "L"}${40 + k * 10} ${k % 2 ? JIB_Y : JIB_Y + 6}`).join(" ")}
          stroke={faint}
          strokeWidth={0.8}
        />
        <path d={`M223 ${JIB_Y} V${JIB_Y - 26} L52 ${JIB_Y} M223 ${JIB_Y - 26} L272 ${JIB_Y}`} stroke={faint} strokeWidth={0.8} />
        <rect x={250} y={JIB_Y + 6} width={20} height={14} fill={orange} />
        <rect x={213} y={JIB_Y + 8} width={20} height={14} stroke={line} strokeWidth={1} fill={panel} />

        {/* Trolley, cable and the slab it carries */}
        <rect x={BUILDING_X + BUILDING_W / 2 - 7} y={JIB_Y + 6} width={14} height={4} fill={line} />
        <motion.rect x={BUILDING_X + BUILDING_W / 2 - 0.5} y={JIB_Y + 10} width={1} style={{ height: cableHeight }} fill={line} />
        <motion.g style={{ y: slabY, opacity: slabOpacity }}>
          <path d={`M${BUILDING_X + BUILDING_W / 2} -6 L${BUILDING_X + 8} 0 M${BUILDING_X + BUILDING_W / 2} -6 L${BUILDING_X + BUILDING_W - 8} 0`} stroke={faint} strokeWidth={0.8} />
          <rect x={BUILDING_X} y={0} width={BUILDING_W} height={FLOOR_H} fill="rgb(225 112 36 / 0.18)" stroke={orange} strokeWidth={1.2} strokeDasharray="4 3" />
        </motion.g>

        {/* Floors placed so far */}
        <motion.g animate={{ opacity: cleared ? 0 : 1 }} transition={{ duration: 0.6 }}>
          {Array.from({ length: built }, (_, i) => {
            const y = floorTop(i);
            return (
              <motion.g key={i} initial={reduceMotion ? false : { opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <rect x={BUILDING_X} y={y} width={BUILDING_W} height={FLOOR_H} fill={panel} stroke={line} strokeWidth={1.2} />
                {[0, 1, 2, 3].map((w) => (
                  <rect
                    key={w}
                    x={BUILDING_X + 10 + w * 22}
                    y={y + 9}
                    width={14}
                    height={14}
                    fill={(i * 3 + w) % 5 === 2 ? orange : "rgb(16 51 66 / 0.14)"}
                  />
                ))}
              </motion.g>
            );
          })}

          {/* Topping-out flag */}
          <motion.path
            d={`M${BUILDING_X + 10} ${floorTop(FLOORS - 1)} V${floorTop(FLOORS - 1) - 22} L${BUILDING_X + 26} ${floorTop(FLOORS - 1) - 17} L${BUILDING_X + 10} ${floorTop(FLOORS - 1) - 12}`}
            stroke={orange}
            fill={orange}
            strokeWidth={1.2}
            strokeLinejoin="round"
            initial={false}
            animate={{ opacity: done ? 1 : 0, scaleY: done ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
