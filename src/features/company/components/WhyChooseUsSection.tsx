import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/company";

/** Four promises set as large single words — airy, with no lines or icons. */
export function WhyChooseUsSection() {
  return (
    <Section id="why-us" tone="beige" aria-labelledby="why-heading">
      <Reveal y={10}>
        <Eyebrow as="h2" id="why-heading" index="04">
          Why choose us
        </Eyebrow>
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <Reveal as="li" key={item.word} delay={index * 0.1}>
            <h3 className="font-display text-[2.25rem] leading-none font-light tracking-[-0.03em] text-navy-deep sm:text-[2.75rem] lg:text-[3.25rem]">
              {item.word}
              <span className="text-orange">.</span>
            </h3>
            <p className="mt-4 max-w-[14rem] text-sm leading-[1.6] text-slate">{item.caption}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
