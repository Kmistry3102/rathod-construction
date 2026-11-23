import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectsShowcase } from "@/features/projects/components/ProjectsShowcase";

/** Selected work as a cinematic, one-at-a-time showcase. */
export function ProjectsSection() {
  return (
    <Section id="projects" tone="ivory" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" index="03" eyebrow="Featured projects" title={["Built with care,", "made to last."]} />
      <Reveal delay={0.15} className="mt-12">
        <ProjectsShowcase projects={projects} />
      </Reveal>
    </Section>
  );
}
