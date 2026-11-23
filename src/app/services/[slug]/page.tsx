import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { PageHeroSkeleton } from "@/components/sections/PageHeroSkeleton";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjectsByService } from "@/data/projects";
import { getServiceBySlug, services } from "@/data/services";
import { quoteCta, siteConfig } from "@/data/site";
import { ProcessSection } from "@/features/company/components/ProcessSection";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { FaqList } from "@/features/services/components/FaqList";
import { createMetadata } from "@/lib/metadata";

/** Every slug is known at build time, so the full page is prerendered. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return createMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<PageHeroSkeleton />}>
      <ServiceDetail params={params} />
    </Suspense>
  );
}

async function ServiceDetail({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = getProjectsByService(service.slug).slice(0, 3);
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={service.image}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      >
        <ButtonLink href={quoteCta.href} size="lg" withArrow>
          Request a quote
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <Section tone="ivory" aria-labelledby="overview-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading id="overview-heading" eyebrow="Overview" title={`${service.shortTitle} projects, delivered without compromise.`} />
            </Reveal>
            <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            <Reveal delay={0.15}>
              <h3 className="mt-12 font-display text-xl font-semibold text-navy-deep">What we offer</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-3 rounded-2xl border border-grey-soft bg-white p-4 text-[0.95rem] font-medium text-navy-deep">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                      <Check aria-hidden className="size-3 text-orange" strokeWidth={3} />
                    </span>
                    {offering}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1} className="rounded-3xl bg-navy-deep p-8 text-white sm:p-10 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-orange">Start a conversation</p>
              <h3 className="mt-4 font-display text-2xl font-semibold">Planning a {service.shortTitle.toLowerCase()} project?</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                Share your brief and our specialists will prepare a tailored proposal, programme and transparent estimate.
              </p>
              <ButtonLink href={quoteCta.href} withArrow className="mt-8 w-full">
                {quoteCta.label}
              </ButtonLink>
              <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-sm">
                <a href={siteConfig.contact.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-orange">
                  <Phone aria-hidden className="size-4 text-orange" /> {siteConfig.contact.phone}
                </a>
                <a href={siteConfig.contact.emailHref} className="flex items-center gap-3 break-all text-white/80 hover:text-orange">
                  <Mail aria-hidden className="size-4 shrink-0 text-orange" /> {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="ivory" aria-label={`${service.title} gallery`} className="pt-0! sm:pt-0! lg:pt-0!">
        <ImageGallery images={[service.image, ...service.gallery]} />
      </Section>

      {/* Benefits */}
      <Section tone="beige" aria-labelledby="benefits-heading">
        <Reveal>
          <SectionHeading id="benefits-heading" align="center" eyebrow="The Rathod advantage" title="Why clients trust us with their projects." />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
          {service.benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={index * 0.08}>
              <FeatureCard feature={benefit} index={index} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <ProcessSection
        steps={service.process}
        eyebrow="Our approach"
        title={`How we deliver ${service.shortTitle.toLowerCase()} projects.`}
        description="A structured, transparent process tailored to the demands of this discipline."
      />

      {relatedProjects.length > 0 && (
        <Section tone="white" aria-labelledby="related-heading">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading id="related-heading" eyebrow="Selected work" title="Related projects" />
            </Reveal>
            <Reveal delay={0.1} className="shrink-0">
              <ButtonLink href="/projects" variant="outline" withArrow>
                View all projects
              </ButtonLink>
            </Reveal>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, index) => (
              <Reveal as="li" key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      {/* FAQ + other services */}
      <Section tone="ivory" aria-labelledby="faq-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions, answered." />
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <FaqList faqs={service.faqs} />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <h2 className="font-display text-xl font-semibold text-navy-deep">Explore other services</h2>
            <ul className="mt-6 space-y-3">
              {otherServices.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-grey-soft bg-white p-4 transition-all duration-300 hover:border-navy-deep"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-beige text-navy transition-colors group-hover:bg-orange group-hover:text-white">
                        <Icon aria-hidden className="size-5" strokeWidth={1.75} />
                      </span>
                      <span className="flex-1 font-display font-semibold text-navy-deep">{item.title}</span>
                      <ArrowUpRight aria-hidden className="size-4 text-slate transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
