import { Divider } from "@/components/motion/Divider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/data/company";

/** A clear, numbered sequence of stages. */
export function ProcessSection() {
  return (
    <Section id="process" tone="white" aria-labelledby="process-heading">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="process-heading"
          index="05"
          eyebrow="Our work process"
          title={["From first idea", "to final key."]}
          className="lg:col-span-8"
        />
        <Reveal delay={0.2} className="hidden sm:block lg:col-span-4">
          <p className="text-[0.95rem] leading-[1.75] text-slate">
            Four disciplined stages keep every project transparent, predictable and beautifully delivered.
          </p>
        </Reveal>
      </div>

      <ol className="mt-8 grid gap-x-10 gap-y-5 sm:mt-12 sm:grid-cols-2 sm:gap-y-10 lg:mt-14 lg:grid-cols-4">
        {workProcess.map((step, index) => (
          <li key={step.title}>
            <Divider delay={index * 0.12} />
            <Reveal delay={index * 0.1} className="grid grid-cols-[2.5rem_1fr] pt-4 sm:block sm:pt-7">
              <span className="row-span-2 font-display text-2xl font-light tracking-[-0.03em] sm:text-3xl text-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-normal text-navy-deep sm:mt-5 sm:text-lg">{step.title}</h3>
              <p className="mt-1 text-sm leading-[1.65] text-slate sm:mt-2.5 sm:text-[0.95rem] sm:leading-[1.75]">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
