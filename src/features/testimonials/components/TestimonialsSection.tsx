import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialDeck } from "@/features/testimonials/components/TestimonialDeck";

/** Client words as a stacked deck of quote cards beside the heading. */
export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="beige" fullHeight={false} aria-labelledby="testimonials-heading">
      <Reveal delay={0.1}>
        <TestimonialDeck
          testimonials={testimonials}
          heading={
            <SectionHeading id="testimonials-heading" index="06" eyebrow="Testimonials" title={["Words from the people", "we build for."]} />
          }
        />
      </Reveal>
    </Section>
  );
}
