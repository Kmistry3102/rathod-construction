import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/data/company";

/**
 * Four soft beige cards, one per stage: a large faint number at the top, then
 * the title and a short line. Two per row on tablets, stacked on phones.
 */
export function ProcessSection() {
  return (
    <Section id="process" tone="ivory" aria-labelledby="process-heading" className="border-t border-line">
      <SectionHeading id="process-heading" index="04" eyebrow="Our work process" title={["From first idea", "to final key."]} />

      <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
        {workProcess.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={0.15 + index * 0.1} y={12} className="h-full">
              <div className="flex h-full flex-col rounded-xl bg-beige p-6 transition-transform duration-500 ease-premium hover:-translate-y-1 sm:p-7">
                <p aria-hidden className="font-display text-[2.75rem] leading-none font-normal tracking-[-0.04em] text-navy-deep/15 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-10 font-display text-[1.25rem] leading-[1.2] font-normal tracking-[-0.02em] text-navy-deep sm:mt-12 sm:text-[1.375rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
