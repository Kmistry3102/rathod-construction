import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { ServicesExplorer } from "@/features/services/components/ServicesExplorer";

/** Services as an interactive index with a photographic preview. */
export function ServicesSection() {
  // Only serialisable fields cross into the client component (icons are functions).
  const items = services.map(({ slug, title, shortTitle, summary, image }) => ({ slug, title, shortTitle, summary, image }));

  return (
    <Section id="services" tone="white" aria-labelledby="services-heading">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="services-heading"
          index="02"
          eyebrow="Our services"
          title={["Everything you need,", "under one roof."]}
          className="lg:col-span-8"
        />
        <Reveal delay={0.2} className="lg:col-span-4">
          <p className="text-[0.95rem] leading-[1.75] text-slate">One team, from first sketch to final finish.</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-8 sm:mt-12">
        <ServicesExplorer services={items} />
      </Reveal>
    </Section>
  );
}
