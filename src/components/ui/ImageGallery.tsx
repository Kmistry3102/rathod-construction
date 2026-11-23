import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

/** Editorial mosaic: the first image is featured, the rest fill the grid. */
export function ImageGallery({ images }: { images: ImageAsset[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {images.map((image, index) => {
        const featured = index === 0 && images.length > 2;
        return (
          <Reveal
            as="li"
            key={`${image.src}-${index}`}
            delay={(index % 2) * 0.08}
            className={cn(
              "relative overflow-hidden rounded-3xl",
              featured ? "aspect-4/3 sm:col-span-2 sm:aspect-21/9" : "aspect-4/3",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={featured ? "(min-width: 1280px) 1200px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
              className="object-cover transition-transform duration-[1.2s] ease-premium hover:scale-105"
            />
          </Reveal>
        );
      })}
    </ul>
  );
}
