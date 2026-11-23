import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/company";
import { images } from "@/data/images";

export function WhyChooseUsSection() {
  return (
    <Section tone="beige" aria-labelledby="why-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+3rem)]">
            <Reveal>
              <SectionHeading
                eyebrow="Why Rathod"
                id="why-heading"
                title="The standard others are measured against."
                description="Clients choose us for the certainty we bring — certainty of quality, cost and programme, backed by eighteen years of delivery."
              />
            </Reveal>
            <Reveal delay={0.1} className="relative mt-10 aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src={images.engineersOnSite.src}
                alt={images.engineersOnSite.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <ButtonLink href="/about" variant="secondary" withArrow>
                More about us
              </ButtonLink>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {whyChooseUs.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={(index % 2) * 0.08}>
              <FeatureCard feature={feature} index={index} />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
