import { Divider } from "@/components/motion/Divider";
import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLink } from "@/components/navigation/SectionLink";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { quoteCta } from "@/data/site";

const headline = [
  <span key="line-1">Designing and building spaces</span>,
  <span key="line-2">
    that <span className="text-orange">stand the test of time.</span>
  </span>,
];

/** Centered, image-free editorial hero with a quiet index of disciplines beneath it. */
export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="scroll-mt-(--header-height) bg-ivory">
      <Container className="pt-20 pb-12 text-center sm:pt-24 lg:pt-28 lg:pb-14">
        <Reveal onMount y={8}>
          <Eyebrow className="justify-center">Design · Engineering · Construction</Eyebrow>
        </Reveal>

        <LineReveal
          as="h1"
          id="hero-heading"
          onMount
          delay={0.12}
          lines={headline}
          className="mx-auto mt-8 max-w-4xl font-display text-[2.125rem] leading-[1.15] font-normal tracking-[-0.025em] text-navy-deep sm:text-[2.6rem] lg:text-[3.1rem]"
        />

        <Reveal onMount delay={0.4}>
          <p className="mx-auto mt-7 max-w-xl text-[0.95rem] leading-[1.75] text-slate sm:text-base">
            A design-led construction studio delivering homes, workplaces and landmarks across Western India — with
            architectural precision, transparent pricing and craftsmanship that endures.
          </p>
        </Reveal>

        <Reveal onMount delay={0.55} y={8} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink section={quoteCta.section} size="lg">
            Start your project
          </ButtonLink>
          <ButtonLink section="projects" size="lg" variant="outline">
            Explore our work
          </ButtonLink>
        </Reveal>

        <Divider onMount delay={0.7} className="mt-16 lg:mt-20" />
        <Reveal onMount delay={0.9} y={6}>
          <ul aria-label="Our disciplines" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 sm:gap-x-10">
            {services.map((service) => (
              <li key={service.slug}>
                <SectionLink
                  section="services"
                  className="text-[0.7rem] font-medium tracking-[0.22em] text-slate uppercase transition-colors duration-300 hover:text-orange"
                >
                  {service.shortTitle}
                </SectionLink>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
