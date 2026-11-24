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
  /** Fill at least one screen with the content centred (default). Off for short bands. */
  fullHeight?: boolean;
}

/** Every homepage section fills at least one screen below the sticky header. */
export const fullScreen = "flex min-h-[calc(100svh-var(--header-height))] flex-col justify-center";

/** A homepage section with controlled editorial spacing, one screen tall with its content centred. */
export function Section({ id, tone = "ivory", fullHeight = true, className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], fullHeight && fullScreen, "scroll-mt-(--header-height) py-12 sm:py-16 lg:py-20", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
