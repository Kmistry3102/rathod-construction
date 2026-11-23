import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, coreValues, milestones, missionVision } from "@/data/company";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { StatsSection } from "@/features/company/components/StatsSection";
import { WhyChooseUsSection } from "@/features/company/components/WhyChooseUsSection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Since 2008, Rathod Construction has delivered 350+ premium residential, commercial and industrial projects. Discover our story, values and the people behind our work.",
  path: "/about",
  image: images.whiteArchitecture,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Eighteen years of building with integrity."
        description="We are a design-led construction company built on a simple belief: that every structure should be made with the care, honesty and precision it deserves."
        image={images.facadeLines}
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Story */}
      <Section tone="ivory" aria-labelledby="story-heading">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading id="story-heading" eyebrow="Our story" title="From a crew of twelve to a trusted name in construction." />
            </Reveal>
            <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
              <p>
                {siteConfig.name} was founded in {siteConfig.foundedYear} by civil engineer Rajesh Rathod with a small,
                dedicated crew and a commitment to doing things properly. Word spread quickly — about the quality of our
                homes, our honest pricing and our habit of finishing on time.
              </p>
              <p>
                Today, our integrated team of architects, engineers, project managers and master craftspeople delivers
                residences, commercial landmarks and industrial facilities across Western India — while still treating
                every project as if it were our first.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl">
              <Image src={images.structureFrame.src} alt={images.structureFrame.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-12 aspect-3/4 overflow-hidden rounded-3xl">
              <Image src={images.meeting.src} alt={images.meeting.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-28">
          {missionVision.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.1}>
              <FeatureCard feature={item} className="p-8! sm:p-10!" />
            </Reveal>
          ))}
        </ul>
      </Section>

      <StatsSection />

      {/* Values */}
      <Section tone="white" aria-labelledby="values-heading">
        <Reveal>
          <SectionHeading
            id="values-heading"
            align="center"
            eyebrow="Our values"
            title="The principles behind every project."
            description="Four commitments guide how we design, build and partner with our clients."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 0.08}>
              <FeatureCard feature={value} index={index} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Timeline */}
      <Section tone="ivory" aria-labelledby="journey-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading id="journey-heading" eyebrow="Our journey" title="Milestones that shaped us." />
            <ul className="mt-10 space-y-3">
              {certifications.map((certification) => (
                <li key={certification} className="flex items-center gap-3 text-sm font-medium text-navy-deep">
                  <BadgeCheck aria-hidden className="size-5 shrink-0 text-orange" strokeWidth={1.75} />
                  {certification}
                </li>
              ))}
            </ul>
          </Reveal>
          <ol className="relative space-y-10 border-l border-grey-soft pl-8 sm:pl-12 lg:col-span-8">
            {milestones.map((milestone, index) => (
              <Reveal as="li" key={milestone.year} delay={index * 0.06} className="relative">
                <span aria-hidden className="absolute top-1.5 -left-[2.4rem] size-3 rounded-full bg-orange ring-8 ring-ivory sm:-left-[3.4rem]" />
                <p className="font-display text-sm font-semibold tracking-[0.18em] text-orange">{milestone.year}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy-deep">{milestone.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-slate">{milestone.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
}
