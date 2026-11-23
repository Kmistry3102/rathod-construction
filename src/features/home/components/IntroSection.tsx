import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

const commitments = [
  "Design and build under one roof",
  "Fixed, itemised and transparent pricing",
  "Dedicated project manager on every site",
  "10-year structural warranty",
];

export function IntroSection() {
  return (
    <Section id="introduction" tone="ivory" aria-labelledby="intro-heading" className="scroll-mt-(--header-height)">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pb-16 sm:pr-16 lg:pb-20">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src={images.whiteArchitecture.src}
              alt={images.whiteArchitecture.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-square w-1/2 overflow-hidden rounded-3xl border-8 border-ivory">
            <Image
              src={images.blueprint.src}
              alt={images.blueprint.alt}
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute top-8 -left-3 rounded-2xl bg-orange px-6 py-5 text-white shadow-[0_20px_40px_-20px_rgb(225_112_36/0.8)] sm:-left-6">
            <p className="font-display text-4xl font-semibold tracking-tight">18+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/85">Years building</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="intro-heading"
              eyebrow="About Rathod Construction"
              title="Where architectural vision meets engineering discipline."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              Since {siteConfig.foundedYear}, we have partnered with homeowners, developers and businesses to create
              buildings of lasting value. Our integrated team of architects, engineers and master builders brings
              every detail together — so your project is delivered exactly as imagined.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] font-medium text-navy-deep">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                    <Check aria-hidden className="size-3 text-orange" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 flex flex-col gap-8 border-t border-grey-soft pt-10 sm:flex-row sm:items-center">
            <ButtonLink href="/about" variant="secondary" withArrow>
              Discover our story
            </ButtonLink>
            <div>
              <p className="font-display font-semibold text-navy-deep">Rajesh Rathod</p>
              <p className="text-sm text-slate">Founder & Managing Director</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
