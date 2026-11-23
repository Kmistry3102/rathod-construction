import Image from "next/image";
import { SectionLink } from "@/components/navigation/SectionLink";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Load immediately — the header logo is part of the first paint. */
  eager?: boolean;
  onNavigate?: () => void;
}

/** The official logo (transparent PNG); returns the visitor to the top of the page. */
export function Logo({ className, eager, onNavigate }: LogoProps) {
  const { logo, name } = siteConfig;
  return (
    <SectionLink
      section="top"
      aria-label={`${name} — back to top`}
      onNavigate={onNavigate}
      className={cn("inline-flex shrink-0", className)}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        loading={eager ? "eager" : undefined}
        fetchPriority={eager ? "high" : undefined}
        sizes="96px"
        className="h-full w-auto"
      />
    </SectionLink>
  );
}
