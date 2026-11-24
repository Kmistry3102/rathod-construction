import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, fullScreen } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { quoteCta } from "@/data/site";

const headline = [
  <span key="line-1">Designing and building spaces</span>,
  <span key="line-2">
    that <span className="text-orange">stand the test of time.</span>
  </span>,
];

/** Left-aligned, image-free editorial hero. */
export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className={`${fullScreen} scroll-mt-(--header-height) bg-ivory`}>
      <Container className="py-16 sm:py-20">
        <Reveal onMount y={8}>
          <Eyebrow>Design · Engineering · Construction</Eyebrow>
        </Reveal>

        <LineReveal
          as="h1"
          id="hero-heading"
          onMount
          delay={0.12}
          lines={headline}
          className="mt-8 max-w-4xl font-display text-[2.125rem] leading-[1.15] font-normal tracking-[-0.025em] text-navy-deep sm:text-[2.6rem] lg:text-[3.1rem]"
        />

        <Reveal onMount delay={0.4}>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-[1.75] text-slate sm:text-base">
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

      </Container>
    </section>
  );
}
