import type { Feature } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
  variant?: "card" | "plain" | "dark";
  className?: string;
}

/** Icon + title + description block, reused for benefits, values and differentiators. */
export function FeatureCard({ feature, index, variant = "card", className }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "group relative h-full",
        variant === "card" &&
          "rounded-3xl border border-grey-soft bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(16_51_66/0.35)] sm:p-8",
        dark && "rounded-3xl border border-white/10 bg-white/3 p-7 sm:p-8",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "inline-flex size-12 items-center justify-center rounded-2xl transition-colors duration-500",
            dark ? "bg-orange/15 text-orange" : "bg-beige text-navy group-hover:bg-orange group-hover:text-white",
          )}
        >
          <Icon aria-hidden className="size-5" strokeWidth={1.75} />
        </span>
        {index !== undefined && (
          <span className={cn("font-display text-sm font-medium", dark ? "text-white/30" : "text-slate/50")}>
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className={cn("mt-6 font-display text-xl font-semibold", dark ? "text-white" : "text-navy-deep")}>{title}</h3>
      <p className={cn("mt-3 text-[0.95rem] leading-relaxed", dark ? "text-white/65" : "text-slate")}>{description}</p>
    </div>
  );
}
