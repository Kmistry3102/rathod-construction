import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Tailwind aspect-ratio class controlling the card's shape. */
  aspect?: string;
  sizes?: string;
}

export function ProjectCard({
  project,
  aspect = "aspect-4/5",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group relative block overflow-hidden rounded-3xl bg-navy-deep", aspect)}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />

      <div className="absolute top-5 right-5 left-5 flex items-start justify-between gap-3">
        <span className="rounded-full bg-white/95 px-3.5 py-1.5 font-display text-xs font-semibold text-navy-deep backdrop-blur">
          {project.category}
        </span>
        {project.status === "In Progress" && (
          <span className="rounded-full bg-orange px-3.5 py-1.5 font-display text-xs font-semibold text-white">
            In progress
          </span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
        <div>
          <p className="flex items-center gap-1.5 text-xs font-medium text-white/70">
            <MapPin aria-hidden className="size-3.5" />
            {project.location} · {project.year}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
        </div>
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-deep transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:bg-orange group-hover:text-white">
          <ArrowUpRight aria-hidden className="size-5" />
        </span>
      </div>
    </Link>
  );
}
