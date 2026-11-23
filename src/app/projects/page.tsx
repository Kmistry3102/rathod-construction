import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { images } from "@/data/images";
import { projectCategories, projects } from "@/data/projects";
import { StatsSection } from "@/features/company/components/StatsSection";
import { ProjectFilterGrid } from "@/features/projects/components/ProjectFilterGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Explore our portfolio of luxury residences, corporate towers, refined interiors and industrial facilities delivered by Rathod Construction.",
  path: "/projects",
  image: images.villaPool,
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="Spaces we are proud to have built."
        description="A selection of residences, workplaces, interiors and industrial facilities — each delivered with precision, transparency and care."
        image={images.villaPool}
        breadcrumbs={[{ label: "Projects", href: "/projects" }]}
      />
      <Section tone="ivory" aria-label="Project portfolio">
        <ProjectFilterGrid projects={projects} categories={projectCategories} />
      </Section>
      <StatsSection />
      <CtaSection />
    </>
  );
}
