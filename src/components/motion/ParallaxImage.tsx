"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  /** Percentage the photograph drifts across its scroll range. Keep it gentle. */
  strength?: number;
  /** Load immediately — for images inside the first screen. */
  eager?: boolean;
}

/**
 * Fills its (relatively positioned) parent with a photograph that drifts
 * slightly slower than the page.
 */
export function ParallaxImage({ src, alt, sizes, strength = 6, eager }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  // The translate is relative to the taller inner layer, so overscan more than the drift.
  const overscan = `-${strength * 1.5}%`;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-x-0" style={{ y, top: overscan, bottom: overscan }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : undefined}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
