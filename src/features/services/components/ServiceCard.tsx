import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon } = service;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-grey-soft bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_28px_56px_-32px_rgb(16_51_66/0.45)]"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-deep/50 to-transparent" />
        <span className="absolute bottom-5 left-5 inline-flex size-12 items-center justify-center rounded-2xl bg-white text-navy transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
          <Icon aria-hidden className="size-5" strokeWidth={1.75} />
        </span>
        <span className="absolute top-5 right-5 font-display text-sm font-medium text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold text-navy-deep">{service.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate">{service.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-deep transition-colors group-hover:text-orange">
          Explore service
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
