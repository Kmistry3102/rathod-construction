import Image from "next/image";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { team } from "@/data/team";
import { TeamCard } from "@/features/team/components/TeamCard";
import { createMetadata } from "@/lib/metadata";
import type { TeamMember } from "@/types";

export const metadata = createMetadata({
  title: "Our Team",
  description:
    "Meet the architects, engineers and project leaders behind Rathod Construction — a team united by craftsmanship, accountability and care.",
  path: "/team",
  image: images.meeting,
});

const groups: Array<{ department: TeamMember["department"]; eyebrow: string; title: string; tone: "ivory" | "white" }> = [
  { department: "Leadership", eyebrow: "Leadership", title: "The people setting our standard.", tone: "ivory" },
  { department: "Projects", eyebrow: "Project leaders", title: "The experts who bring every project to life.", tone: "white" },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Experienced people. Exceptional buildings."
        description="Behind every project is a close-knit team of architects, engineers, managers and craftspeople who care deeply about getting it right."
        image={images.meeting}
        breadcrumbs={[{ label: "Team", href: "/team" }]}
      />

      {groups.map((group) => (
        <Section key={group.department} tone={group.tone} aria-labelledby={`team-${group.department}`}>
          <Reveal>
            <SectionHeading id={`team-${group.department}`} eyebrow={group.eyebrow} title={group.title} />
          </Reveal>
          <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {team
              .filter((member) => member.department === group.department)
              .map((member, index) => (
                <Reveal as="li" key={member.name} delay={index * 0.08}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
          </ul>
        </Section>
      ))}

      {/* Careers */}
      <Section tone="beige" aria-labelledby="careers-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-4/3 overflow-hidden rounded-3xl">
            <Image src={images.siteWorkers.src} alt={images.siteWorkers.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              id="careers-heading"
              eyebrow="Careers"
              title="Build your career with us."
              description="We are always looking for talented engineers, architects, site managers and craftspeople who share our passion for quality. Join a team where your work truly stands the test of time."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" size="lg" withArrow>
                Get in touch
              </ButtonLink>
              <ButtonLink href={`${siteConfig.contact.emailHref}?subject=Careers`} size="lg" variant="outline">
                Email your CV
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
