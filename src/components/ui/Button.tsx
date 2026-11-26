import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLink } from "@/components/navigation/SectionLink";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-navy-deep text-white hover:bg-navy",
  outline: "border border-navy-deep/30 bg-transparent text-navy-deep hover:border-navy-deep hover:bg-navy-deep hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

/**
 * Rounded-rectangle button (10px radius, 44–48px tall): it lifts slightly on
 * hover, eases its colours and nudges the arrow forward.
 */
function buttonStyles(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-[10px] font-medium whitespace-nowrap",
    "transition-[background-color,border-color,color,translate] duration-500 ease-premium hover:-translate-y-0.5",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={1.75}
      className="size-4 transition-transform duration-500 ease-premium group-hover:translate-x-1"
    />
  );
}

interface StyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonLinkProps = StyleProps & {
  section: SectionId;
  children: ReactNode;
  onNavigate?: () => void;
};

/** Button-styled link that scrolls to a section of the page. */
export function ButtonLink({ section, variant = "primary", size = "md", className, children, onNavigate }: ButtonLinkProps) {
  return (
    <SectionLink section={section} onNavigate={onNavigate} className={buttonStyles(variant, size, className)}>
      <span>{children}</span>
      <Arrow />
    </SectionLink>
  );
}

type ButtonProps = ComponentProps<"button"> & StyleProps & { withArrow?: boolean };

export function Button({ variant = "primary", size = "md", className, withArrow, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonStyles(variant, size, className)} {...props}>
      <span className="inline-flex items-center gap-2">{children}</span>
      {withArrow && <Arrow />}
    </button>
  );
}
