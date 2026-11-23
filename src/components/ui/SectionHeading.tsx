import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em]",
        light ? "text-white/70" : "text-slate",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-orange" />
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light,
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow light={light} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        id={id}
        className={cn(
          "font-display text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-deep",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-slate")}>
          {description}
        </p>
      )}
    </div>
  );
}
