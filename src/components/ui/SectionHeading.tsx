import type { ReactNode } from "react";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Optional section index shown before the label, e.g. "01". */
  index?: string;
  light?: boolean;
  className?: string;
  /** Render as a heading when the label is the section's only title. */
  as?: "p" | "h2";
  id?: string;
}

/** Small uppercase label with refined letter spacing. */
export function Eyebrow({ children, index, light, className, as: Tag = "p", id }: EyebrowProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "flex items-center gap-4 font-display text-[0.7rem] font-semibold tracking-[0.3em] uppercase",
        light ? "text-white/65" : "text-slate",
        className,
      )}
    >
      {index && <span className="text-orange">{index}</span>}
      {index && <span aria-hidden className={cn("h-px w-8", light ? "bg-white/30" : "bg-line-strong")} />}
      <span>{children}</span>
    </Tag>
  );
}

/** Shared type scale for section titles. */
export const headingStyles =
  "font-display text-[1.875rem] leading-[1.18] font-normal tracking-[-0.025em] sm:text-[2.25rem] lg:text-[2.5rem]";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  /** A string, or explicit lines for a line-by-line reveal. */
  title: string | ReactNode[];
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  light,
  as = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal y={12}>
          <Eyebrow index={index} light={light} className={cn("mb-6", align === "center" && "justify-center")}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <LineReveal
        as={as}
        id={id}
        lines={typeof title === "string" ? [title] : title}
        className={cn(headingStyles, light ? "text-white" : "text-navy-deep")}
      />
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-6 max-w-xl text-[0.95rem] leading-[1.75] sm:text-base",
              align === "center" && "mx-auto",
              light ? "text-white/65" : "text-slate",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
