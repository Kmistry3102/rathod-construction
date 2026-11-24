import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectsShowcase } from "@/features/projects/components/ProjectsShowcase";

/** Selected work as a cinematic stage with a thumbnail strip, on navy. */
export function ProjectsSection() {
  return (
    <Section id="projects" tone="navy" aria-labelledby="projects-heading">
      <Reveal>
        <ProjectsShowcase
          projects={projects}
          heading={
            <SectionHeading id="projects-heading" light index="05" eyebrow="Featured projects" title={["Built with care,", "made to last."]} />
          }
        />
      </Reveal>
    </Section>
  );
}
