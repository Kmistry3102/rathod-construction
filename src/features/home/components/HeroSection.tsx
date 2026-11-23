import Image from "next/image";
import { ArrowDown, Award, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { quoteCta } from "@/data/site";

const trustPoints = [
  { icon: Award, label: "18+ years of excellence" },
  { icon: ShieldCheck, label: "ISO 9001 & 45001 certified" },
];

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] items-end overflow-hidden bg-navy-deep"
    >
      <Image
        src={images.heroTowers.src}
        alt={images.heroTowers.alt}
        fill
        preload
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/80 via-transparent to-transparent" />
      <div aria-hidden className="bg-blueprint absolute inset-0 -z-10" />

      <Container className="pt-24 pb-14 sm:pt-32 lg:pb-20">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow light>Design · Engineering · Construction</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-7 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Building spaces that <span className="text-orange">stand the test</span> of time.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Rathod Construction delivers premium residential, commercial and interior projects with
              architectural precision, honest pricing and craftsmanship that endures.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={quoteCta.href} size="lg" withArrow>
              Start your project
            </ButtonLink>
            <ButtonLink href="/projects" size="lg" variant="outline-light">
              Explore our work
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal
          delay={0.45}
          className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-24"
        >
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-white/80">
                <Icon aria-hidden className="size-5 text-orange" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
          <a
            href="#introduction"
            className="group hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Scroll to explore
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-white">
              <ArrowDown aria-hidden className="size-4 animate-bounce" />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
