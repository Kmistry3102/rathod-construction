import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white hover:bg-orange-dark",
  secondary: "bg-navy-deep text-white hover:bg-navy",
  outline: "border border-navy-deep/20 text-navy-deep hover:border-navy-deep hover:bg-navy-deep hover:text-white",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-deep",
  ghost: "text-navy-deep hover:text-orange px-0!",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[0.95rem]",
};

export function buttonStyles({ variant = "primary", size = "md", className }: ButtonStyleOptions = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-tight",
    "transition-all duration-300 ease-premium disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

interface ButtonContentProps {
  children: ReactNode;
  withArrow?: boolean;
}

function ButtonContent({ children, withArrow }: ButtonContentProps) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & ButtonStyleOptions & { withArrow?: boolean };

export function ButtonLink({ variant, size, className, withArrow, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & ButtonStyleOptions & { withArrow?: boolean };

export function Button({ variant, size, className, withArrow, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={buttonStyles({ variant, size, className })} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}
