import { Divider } from "@/components/motion/Divider";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workProcess } from "@/data/company";

/** The page's single dark band: a clear, numbered sequence of stages. */
export function ProcessSection() {
  return (
    <Section id="process" tone="navy" aria-labelledby="process-heading">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="process-heading"
          light
          index="05"
          eyebrow="Our work process"
          title={["From first idea", "to final key."]}
          className="lg:col-span-8"
        />
        <Reveal delay={0.2} className="lg:col-span-4">
          <p className="text-[0.95rem] leading-[1.75] text-white/65">
            Four disciplined stages keep every project transparent, predictable and beautifully delivered.
          </p>
        </Reveal>
      </div>

      <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {workProcess.map((step, index) => (
          <li key={step.title}>
            <Divider light delay={index * 0.12} />
            <Reveal delay={index * 0.1} className="pt-7">
              <span className="font-display text-3xl font-light tracking-[-0.03em] text-orange/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-normal text-white">{step.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-[1.75] text-white/60">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
