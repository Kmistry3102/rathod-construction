import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

const cardSizes = "(min-width: 768px) 50vw, 100vw";

/** Editorial two-column layout with staggered card heights. */
export function FeaturedProjectsSection() {
  const columns = [
    featuredProjects.filter((_, index) => index % 2 === 0),
    featuredProjects.filter((_, index) => index % 2 === 1),
  ];

  return (
    <Section tone="white" aria-labelledby="projects-heading">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured projects"
            title="Landmarks built with care, delivered with confidence."
          />
        </Reveal>
        <Reveal delay={0.1} className="shrink-0">
          <ButtonLink href="/projects" variant="outline" withArrow>
            View all projects
          </ButtonLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={columnIndex === 1 ? "space-y-6 md:pt-24 lg:space-y-8" : "space-y-6 lg:space-y-8"}>
            {column.map((project, index) => {
              const tall = (columnIndex + index) % 2 === 0;
              return (
                <Reveal key={project.slug} delay={columnIndex * 0.1}>
                  <ProjectCard project={project} aspect={tall ? "aspect-4/5" : "aspect-4/3"} sizes={cardSizes} />
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>
    </Section>
  );
}
