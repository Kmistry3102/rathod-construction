import { CtaSection } from "@/components/sections/CtaSection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { ProcessSection } from "@/features/company/components/ProcessSection";
import { StatsSection } from "@/features/company/components/StatsSection";
import { WhyChooseUsSection } from "@/features/company/components/WhyChooseUsSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { IntroSection } from "@/features/home/components/IntroSection";
import { FeaturedProjectsSection } from "@/features/projects/components/FeaturedProjectsSection";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { TestimonialsSection } from "@/features/testimonials/components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />

      <Section tone="ivory" aria-labelledby="services-heading" className="pt-20 sm:pt-24 lg:pt-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Our services"
              title="Complete construction expertise, under one roof."
              description="From the first sketch to the final finish, our specialist teams deliver every stage with the same uncompromising standard."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink href="/services" variant="outline" withArrow>
              All services
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 lg:mt-20">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <FeaturedProjectsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
