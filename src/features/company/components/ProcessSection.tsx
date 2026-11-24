import { Divider } from "@/components/motion/Divider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/data/company";

/**
 * Minimal process: one fine line across four columns with a small dot at each
 * stage, and the number, title and short line beneath. On phones the line
 * runs down the left instead.
 */
export function ProcessSection() {
  const total = workProcess.length;
  return (
    <Section id="process" tone="ivory" aria-labelledby="process-heading" className="border-t border-line">
      <SectionHeading id="process-heading" index="04" eyebrow="Our work process" title={["From first idea", "to final key."]} />

      <div className="relative mt-10 sm:mt-12 lg:mt-14">
        {/* The line across, drawn left to right */}
        <Divider className="absolute top-0.75 left-0 hidden bg-navy-deep/25 lg:block" />

        <ol className="grid lg:grid-cols-4 lg:gap-8">
          {workProcess.map((step, index) => (
            <li key={step.title} className="relative pb-8 pl-8 last:pb-0 lg:pb-0 lg:pl-0">
              {/* The line down, on phones */}
              {index < total - 1 && <span aria-hidden className="absolute top-2 bottom-0 left-0.75 w-px bg-navy-deep/25 lg:hidden" />}

              <Reveal delay={0.2 + index * 0.15} y={8}>
                <span aria-hidden className="absolute top-0 left-0 block size-1.75 rounded-full bg-orange lg:relative" />
                <div className="-mt-1.5 lg:mt-8">
                  <p className="font-display text-xs tracking-[0.2em] text-slate tabular-nums">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-[1.25rem] leading-[1.2] font-normal tracking-[-0.02em] text-navy-deep sm:text-[1.375rem]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
