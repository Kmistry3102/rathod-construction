"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { easeInOutQuart, easeOutExpo } from "@/components/motion/easing";
import { siteConfig } from "@/data/site";
import { markIntroDone } from "@/lib/intro";

const SEEN_KEY = "rathod-intro-seen";
/** When the curtain starts to lift — the hero's own entrance begins here. */
const REVEAL_AT_MS = 1600;

/**
 * Opening intro: the logo rises in while a thin orange line fills, then the
 * ivory curtain lifts to reveal the page. Plays once per browser session and
 * is skipped for reduced-motion visitors (and without JavaScript, via the
 * <noscript> rule in the root layout).
 */
export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const logo = logoRef.current;
    const bar = barRef.current;
    const count = countRef.current;
    if (!root || !logo || !bar || !count) return;

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

    html.style.overflow = "hidden";
    const sequence = animate([
      [logo, { opacity: [0, 1], y: [14, 0], filter: ["blur(6px)", "blur(0px)"] }, { duration: 0.8, ease: easeOutExpo }],
      [bar, { scaleX: [0, 1] }, { duration: 1.1, at: 0.25, ease: easeInOutQuart }],
      [root, { clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"] }, { duration: 0.85, at: "+0.25", ease: easeInOutQuart }],
    ]);
    const counter = animate(0, 100, {
      duration: 1.1,
      delay: 0.25,
      ease: easeInOutQuart,
      onUpdate: (value) => {
        count.textContent = String(Math.round(value)).padStart(3, "0");
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

  return (
    <div
      ref={rootRef}
      id="intro-loader"
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
    >
      <div className="flex flex-col items-center">
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Image
            src={siteConfig.logo.src}
            alt=""
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            loading="eager"
            fetchPriority="high"
            sizes="128px"
            className="h-24 w-auto sm:h-28"
          />
        </div>
        <div className="mt-9 h-px w-40 overflow-hidden bg-line">
          <div ref={barRef} className="h-full w-full origin-left bg-orange" style={{ transform: "scaleX(0)" }} />
        </div>
        <p ref={countRef} className="mt-3 text-[0.65rem] font-medium tracking-[0.3em] text-slate tabular-nums">
          000
        </p>
      </div>
    </div>
  );
}
