import { Divider } from "@/components/motion/Divider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { missionVision } from "@/data/company";

/** Mission and vision as two large statements on deep navy. */
export function MissionVisionSection() {
  return (
    <Section id="mission" tone="navy" aria-labelledby="mission-heading">
      <Reveal y={10}>
        <Eyebrow as="h2" id="mission-heading" light>
          What drives us
        </Eyebrow>
      </Reveal>

      <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:gap-0">
        {missionVision.map((item, index) => (
          <div key={item.title} className={index === 1 ? "lg:border-l lg:border-white/12 lg:pl-14" : "lg:pr-14"}>
            <Divider light delay={index * 0.12} />
            <Reveal delay={0.1 + index * 0.12} className="pt-7 sm:pt-9">
              <p className="flex items-center gap-4 text-[0.65rem] font-semibold tracking-[0.3em] text-white/55 uppercase">
                <span className="font-display text-orange">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </p>
              <p className="mt-6 max-w-xl font-display text-[1.6rem] leading-[1.3] font-light tracking-[-0.02em] text-white sm:text-[2rem] lg:mt-8 lg:text-[2.35rem]">
                {item.description}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
