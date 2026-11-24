import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/company";

const numerals = ["I", "II", "III", "IV", "V", "VI"];

/**
 * The heading with four hallmark cards in a row beneath it. On hover a card
 * lifts while brand orange spreads from its lower-left corner, the text turns
 * white and rises a touch, and a fine rule draws along the base — one easing
 * throughout, so it reads as a single smooth motion.
 */
export function WhyChooseUsSection() {
  const ease = "duration-[900ms] ease-premium";
  return (
    <Section id="why-us" tone="beige" fullHeight={false} aria-labelledby="why-heading">
      <SectionHeading id="why-heading" index="02" eyebrow="Why choose us" title={["Four promises,", "kept on every site."]} />

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <Reveal as="li" key={item.word} delay={0.1 + index * 0.08}>
            <div
              className={`group relative isolate flex h-full min-h-40 flex-col justify-between overflow-hidden rounded-xl border border-navy-deep/10 bg-white p-4 transition-[translate,box-shadow,border-color] ${ease} hover:-translate-y-1.5 hover:border-orange hover:shadow-[0_28px_50px_-26px_rgb(225_112_36/0.55)] sm:min-h-48 sm:p-6`}
            >
              {/* Orange spreading from the lower-left corner */}
              <span
                aria-hidden
                className={`absolute inset-0 -z-10 bg-linear-to-tr from-orange-dark to-orange transition-[clip-path] [clip-path:circle(0%_at_0%_100%)] ${ease} group-hover:[clip-path:circle(150%_at_0%_100%)]`}
              />
              <span
                aria-hidden
                className={`pointer-events-none absolute -top-3 right-4 -z-10 font-display text-[4.5rem] leading-none font-light text-navy-deep/[0.06] transition-[color,translate] select-none ${ease} group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:text-white/20 sm:right-5 sm:text-[5.5rem]`}
              >
                {numerals[index]}
              </span>

              <div className={`mt-auto pt-12 transition-transform ${ease} group-hover:-translate-y-1`}>
                <h3
                  className={`font-display text-[1.5rem] leading-none font-light tracking-[-0.03em] text-navy-deep transition-colors ${ease} group-hover:text-white sm:text-[1.875rem]`}
                >
                  {item.word}
                  <span className={`text-orange transition-colors ${ease} group-hover:text-navy-deep`}>.</span>
                </h3>
                <p className={`mt-2 text-sm leading-[1.6] text-slate transition-colors ${ease} group-hover:text-white/90`}>
                  {item.caption}
                </p>
              </div>

              <span
                aria-hidden
                className={`absolute inset-x-4 bottom-3 h-px origin-left scale-x-0 bg-beige transition-transform delay-200 sm:inset-x-6 sm:bottom-4 ${ease} group-hover:scale-x-100`}
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
