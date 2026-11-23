import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/data/company";
import type { ProcessStep } from "@/types";

interface ProcessSectionProps {
  steps?: ProcessStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function ProcessSection({
  steps = workProcess,
  eyebrow = "How we work",
  title = "A clear, proven process from first idea to final key.",
  description = "Four disciplined stages keep every project transparent, predictable and beautifully delivered.",
}: ProcessSectionProps) {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <Reveal className="relative">
        <SectionHeading light align="center" eyebrow={eyebrow} title={title} description={description} />
      </Reveal>

      <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        {/* Connecting line on desktop */}
        <span aria-hidden className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-white/15 lg:block" />
        {steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.1} className="relative text-center">
            <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-orange/60 bg-navy-deep font-display text-base font-semibold text-orange">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-7 font-display text-xl font-semibold text-white">{step.title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-[0.95rem] leading-relaxed text-white/65">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
