import { Divider } from "@/components/motion/Divider";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { missionVision } from "@/data/company";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

/** About: a tall architectural image beside the studio's story, mission and vision. */
export function AboutSection() {
  return (
    <Section id="about" tone="ivory" aria-labelledby="about-heading" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <ImageReveal className="aspect-4/3 sm:aspect-16/10 lg:col-span-5 lg:aspect-4/5">
          <ParallaxImage src={images.studio.src} alt={images.studio.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
        </ImageReveal>

        <div className="lg:col-span-7 lg:pl-4">
          <SectionHeading
            id="about-heading"
            index="01"
            eyebrow="About us"
            title={["Built on vision,", "engineered with care."]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-[0.95rem] leading-[1.75] text-slate sm:text-base">
              Architects, engineers and builders working as one team — designing and building with care since{" "}
              {siteConfig.foundedYear}.
            </p>
          </Reveal>

          <Divider className="mt-10" />
          <div className="grid gap-8 pt-8 sm:grid-cols-2 sm:gap-10">
            {missionVision.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.1}>
                <Eyebrow>{item.title}</Eyebrow>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-navy-deep">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.7rem] font-semibold tracking-[0.26em] text-slate uppercase">
              Est. {siteConfig.foundedYear} <span className="px-2 text-orange">·</span> Ahmedabad
            </p>
            <TextLink section="process">How we work</TextLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
