import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

/** About: a tall studio photograph beside the studio's story. */
export function AboutSection() {
  return (
    <Section id="about" tone="ivory" aria-labelledby="about-heading" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Studio photograph with a quiet founding caption */}
        <div className="hidden sm:block lg:col-span-5">
          <ImageReveal className="aspect-16/10 lg:aspect-4/5">
            <ParallaxImage src={images.studio.src} alt={images.studio.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-deep/75 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="font-display text-4xl leading-none font-light tracking-[-0.03em]">{siteConfig.foundedYear}</p>
              <p className="mt-3 border-t border-white/30 pt-3 text-[0.62rem] font-semibold tracking-[0.24em] text-white/80 uppercase">
                Founded · Ahmedabad
              </p>
            </div>
          </ImageReveal>
        </div>

        <div className="lg:col-span-7 lg:pl-4">
          <SectionHeading
            id="about-heading"
            index="01"
            eyebrow="About us"
            title={["We build what we’d be", "proud to live in."]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-[0.95rem] leading-[1.75] text-slate sm:text-base">
              Rathod Construction brings architects, engineers and site teams under one roof — taking homes and
              workplaces from first sketch to final key.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
