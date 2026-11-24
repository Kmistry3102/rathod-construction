import Image from "next/image";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, fullScreen } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { quoteCta } from "@/data/site";

const headline = [
  <span key="line-1">Designing and building spaces</span>,
  <span key="line-2">
    that <span className="text-orange">stand the test of time.</span>
  </span>,
];

/**
 * Split editorial hero: the headline and calls to action on the left, an
 * arched photograph on the right with a fine offset arch drawn behind it.
 */
export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className={`${fullScreen} scroll-mt-(--header-height) bg-ivory`}>
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal onMount y={8}>
            <Eyebrow>Design · Engineering · Construction</Eyebrow>
          </Reveal>

          <LineReveal
            as="h1"
            id="hero-heading"
            onMount
            delay={0.12}
            lines={headline}
            className="mt-8 max-w-2xl font-display text-[2.125rem] leading-[1.15] font-normal tracking-[-0.025em] text-navy-deep sm:text-[2.6rem] lg:text-[3.1rem]"
          />

          <Reveal onMount delay={0.4}>
            <p className="mt-7 max-w-lg text-[0.95rem] leading-[1.75] text-slate sm:text-base">
              A design-led construction studio delivering homes, workplaces and landmarks across Western India — with
              architectural precision, transparent pricing and craftsmanship that endures.
            </p>
          </Reveal>

          <Reveal onMount delay={0.55} y={8} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink section={quoteCta.section} size="lg">
              Start your project
            </ButtonLink>
            <ButtonLink section="projects" size="lg" variant="outline">
              Explore our work
            </ButtonLink>
          </Reveal>
        </div>

        {/* Arched photograph */}
        <Reveal onMount delay={0.35} y={28} className="hidden sm:block lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:mr-0 lg:max-w-none">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 -translate-y-3 [border-radius:50%_50%_12px_12px/40%_40%_12px_12px] border border-orange/50 sm:translate-x-4 sm:-translate-y-4"
            />
            <div className="relative aspect-4/5 overflow-hidden [border-radius:50%_50%_12px_12px/40%_40%_12px_12px] bg-beige lg:aspect-auto lg:h-[min(36rem,calc(100svh-var(--header-height)-7rem))]">
              <Image
                src={images.residenceDusk.src}
                alt={images.residenceDusk.alt}
                fill
                priority
                sizes="(min-width: 1024px) 36vw, 24rem"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
