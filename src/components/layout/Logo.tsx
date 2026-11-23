import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  preload?: boolean;
  onNavigate?: () => void;
}

/**
 * The official logo, rendered unmodified. It has a white backdrop baked in,
 * so it is always placed on a white surface.
 */
export function Logo({ className, preload, onNavigate }: LogoProps) {
  const { logo, name } = siteConfig;
  return (
    <Link
      href="/"
      aria-label={`${name} — home`}
      onNavigate={onNavigate}
      className={cn("inline-flex shrink-0 bg-white", className)}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        preload={preload}
        sizes="96px"
        className="h-full w-auto"
      />
    </Link>
  );
}
