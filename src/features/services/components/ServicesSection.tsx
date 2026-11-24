import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { ServicesAccordion } from "@/features/services/components/ServicesAccordion";

/** Services as expanding photo panels: one opens to its title and summary. */
export function ServicesSection() {
  // Only serialisable fields cross into the client component (icons are functions).
  const items = services.map(({ slug, title, shortTitle, summary, image }) => ({ slug, title, shortTitle, summary, image }));

  return (
    <Section id="services" tone="white" aria-labelledby="services-heading">
      <SectionHeading
        id="services-heading"
        index="03"
        eyebrow="Our services"
        title={["Everything you need,", "under one roof."]}
      />

      <Reveal delay={0.1} className="mt-8 sm:mt-12">
        <ServicesAccordion services={items} />
      </Reveal>
    </Section>
  );
}
