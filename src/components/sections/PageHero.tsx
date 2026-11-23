import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { ImageAsset, NavItem } from "@/types";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: ImageAsset;
  /** Trail after "Home"; the last item is the current page. */
  breadcrumbs: NavItem[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image src={image.src} alt="" fill preload sizes="100vw" className="-z-20 object-cover opacity-45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      <div aria-hidden className="bg-blueprint absolute inset-0 -z-10" />

      <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/60">
            {[{ label: "Home", href: "/" }, ...breadcrumbs].map((crumb, index, all) => {
              const isLast = index === all.length - 1;
              return (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {isLast ? (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.href} className="transition-colors hover:text-orange">
                        {crumb.label}
                      </Link>
                      <ChevronRight aria-hidden className="size-3.5" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-12 max-w-3xl lg:mt-16">
          <Reveal>
            <Eyebrow light>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl leading-[1.06] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.24} className="mt-10">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
