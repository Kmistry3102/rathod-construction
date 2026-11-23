import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight, Check, Lightbulb, Quote, Target } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { PageHeroSkeleton } from "@/components/sections/PageHeroSkeleton";
import { Avatar } from "@/components/ui/Avatar";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

/** Every slug is known at build time, so the full page is prerendered. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<PageHeroSkeleton />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({ params }: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceSlug);
  const testimonial = testimonials.find((item) => item.projectSlug === project.slug);
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Year", value: project.status === "Completed" ? String(project.year) : `${project.year} (est.)` },
    { label: "Area", value: project.area },
    { label: "Duration", value: project.duration },
    { label: "Project value", value: project.value },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · ${project.status}`}
        title={project.title}
        description={project.summary}
        image={project.image}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
      />

      {/* Key facts */}
      <section aria-label="Project facts" className="border-b border-grey-soft bg-white">
        <Container className="px-0! sm:px-0! lg:px-10!">
          <dl className="grid grid-cols-2 gap-px bg-grey-soft md:grid-cols-3 lg:grid-cols-6">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-5 py-7 sm:px-8 lg:px-6">
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-slate">{fact.label}</dt>
                <dd className="mt-2 font-display text-base font-semibold text-navy-deep sm:text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Overview */}
      <Section tone="ivory" aria-labelledby="project-overview-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading id="project-overview-heading" eyebrow="Project overview" title="The vision and the build." />
            </Reveal>
            <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            {service && (
              <Reveal delay={0.15} className="mt-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-deep underline decoration-orange decoration-2 underline-offset-8 transition-colors hover:text-orange"
                >
                  Service: {service.title}
                </Link>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl border border-grey-soft bg-white p-8 sm:p-10">
              <h3 className="font-display text-xl font-semibold text-navy-deep">Project highlights</h3>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-navy-deep">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                      <Check aria-hidden className="size-3 text-orange" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-24">
          {[
            { icon: Target, title: "The challenge", text: project.challenge, dark: false },
            { icon: Lightbulb, title: "Our solution", text: project.solution, dark: true },
          ].map(({ icon: Icon, title, text, dark }, cardIndex) => (
            <Reveal
              key={title}
              delay={cardIndex * 0.1}
              className={cn("rounded-3xl p-8 sm:p-10", dark ? "bg-navy-deep text-white" : "bg-beige text-navy-deep")}
            >
              <Icon aria-hidden className="size-7 text-orange" strokeWidth={1.75} />
              <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
              <p className={cn("mt-4 leading-relaxed", dark ? "text-white/70" : "text-slate")}>{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" aria-label={`${project.title} gallery`}>
        <ImageGallery images={project.gallery} />
      </Section>

      {testimonial && (
        <Section tone="beige" aria-label="Client testimonial">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Quote aria-hidden className="mx-auto size-12 fill-orange/10 text-orange" strokeWidth={1.25} />
            <blockquote className="mt-8 font-display text-2xl leading-snug font-medium tracking-tight text-navy-deep sm:text-3xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4 text-left">
              <Avatar name={testimonial.name} image={testimonial.image} />
              <div>
                <p className="font-display font-semibold text-navy-deep">{testimonial.name}</p>
                <p className="text-sm text-slate">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Previous / next */}
      <nav aria-label="More projects" className="border-t border-grey-soft bg-ivory">
        <Container className="grid sm:grid-cols-2">
          {[
            { project: previous, label: "Previous project", Icon: ArrowLeft, align: "left" },
            { project: next, label: "Next project", Icon: ArrowRight, align: "right" },
          ].map(({ project: item, label, Icon, align }) => (
            <Link
              key={label}
              href={`/projects/${item.slug}`}
              className={cn(
                "group flex items-center gap-5 py-10 sm:py-14",
                align === "right" ? "flex-row-reverse text-right max-sm:border-t sm:border-l sm:pl-10" : "sm:pr-10",
                "border-grey-soft",
              )}
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-grey-soft text-navy-deep transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                <Icon aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.16em] text-slate">{label}</span>
                <span className="mt-1 block font-display text-lg font-semibold text-navy-deep sm:text-xl">{item.title}</span>
              </span>
            </Link>
          ))}
        </Container>
      </nav>

      <CtaSection />
    </>
  );
}
