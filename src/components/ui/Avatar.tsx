import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  image?: ImageAsset;
  className?: string;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** Portrait thumbnail with a monogram fallback when no photo is available. */
export function Avatar({ name, image, className }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy font-display text-sm font-semibold text-white",
        className,
      )}
    >
      {image ? (
        <Image src={image.src} alt={image.alt} fill sizes="64px" className="object-cover" />
      ) : (
        <span aria-hidden>{initials(name)}</span>
      )}
    </span>
  );
}
