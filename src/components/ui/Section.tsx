import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

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
    <div className={cn("mx-auto w-full max-w-(--container-max) px-6 sm:px-10 lg:px-14", className)} {...props}>
      {children}
    </div>
  );
}

interface SectionProps extends Omit<ComponentProps<"section">, "id"> {
  /** Anchor used by the navigation; offsets for the sticky header. */
  id: SectionId;
  tone?: SectionTone;
  containerClassName?: string;
}

/** A homepage section with controlled editorial spacing. */
export function Section({ id, tone = "ivory", className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], "scroll-mt-(--header-height) py-16 sm:py-20 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
