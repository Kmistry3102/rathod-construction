import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { quoteCta } from "@/data/site";
import { ProcessSection } from "@/features/company/components/ProcessSection";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Residential and commercial construction, interior fit-out, architectural design, project management and industrial infrastructure — delivered by one accountable team.",
  path: "/services",
  image: images.siteAerial,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every discipline your project needs, under one roof."
        description="From concept design to final handover, our specialist teams deliver each stage with the same uncompromising standard of quality, safety and transparency."
        image={images.siteAerial}
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      >
        <ButtonLink href={quoteCta.href} size="lg" withArrow>
          Discuss your project
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" aria-label="Service list">
        <ServicesGrid services={services} />
      </Section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
