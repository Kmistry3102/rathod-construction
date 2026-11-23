import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "ivory" | "white" | "beige" | "navy";

const tones: Record<SectionTone, string> = {
  ivory: "bg-ivory text-navy-deep",
  white: "bg-white text-navy-deep",
  beige: "bg-beige text-navy-deep",
  navy: "bg-navy-deep text-white",
};

interface ContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-(--container-max) px-5 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </div>
  );
}

interface SectionProps extends ComponentProps<"section"> {
  tone?: SectionTone;
  /** Removes the default vertical rhythm, for full-bleed sections. */
  flush?: boolean;
  containerClassName?: string;
}

export function Section({ tone = "ivory", flush, className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn(tones[tone], !flush && "py-20 sm:py-24 lg:py-32", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
