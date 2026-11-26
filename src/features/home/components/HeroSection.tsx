import { LineReveal } from "@/components/motion/LineReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, fullScreen } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HeroConstruction } from "@/features/home/components/HeroConstruction";

const headline = [
  <span key="line-1">Building Trust.</span>,
  <span key="line-2" className="text-orange">
    Creating Landmarks.
  </span>,
];

/**
 * Split editorial hero: the headline and calls to action on the left, a tall
 * arch on the right holding a looping construction animation.
 */
export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className={`${fullScreen} scroll-mt-(--header-height) bg-ivory`}>
      <Container className="grid items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:py-10 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal onMount y={8}>
            <Eyebrow className="text-xs! tracking-[0.28em]! text-slate! sm:text-sm!">Rathod Construction</Eyebrow>
          </Reveal>

          <LineReveal
            as="h1"
            id="hero-heading"
            onMount
            delay={0.12}
            lines={headline}
            className="mt-4 max-w-2xl font-display text-[2.125rem] leading-[1.15] font-normal tracking-tight text-navy-deep sm:text-[2.6rem] lg:text-[3.1rem]"
          />

          <Reveal onMount delay={0.4}>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-[1.75] text-slate sm:text-base">
              25 Years of Construction Experience. We believe every great structure begins with a strong foundation,
              quality workmanship and a commitment to excellence.
            </p>
          </Reveal>

          <Reveal onMount delay={0.55} y={8} className="mt-10">
            <ButtonLink section="projects" size="lg">
              View Our Projects
            </ButtonLink>
          </Reveal>
        </div>

        {/* Construction animation */}
        <Reveal onMount delay={0.35} y={28} className="-order-1 lg:order-0 lg:col-span-5">
          <div className="relative mr-auto w-full max-w-38 sm:mx-auto sm:max-w-md lg:mr-0 lg:max-w-104">
            <div className="relative aspect-3/4 lg:aspect-auto lg:h-[min(34rem,calc(100svh-var(--header-height)-7rem))]">
              <HeroConstruction />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
