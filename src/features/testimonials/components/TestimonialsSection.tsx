import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";

/** Client words, one short quote at a time. */
export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="ivory" fullHeight={false} aria-labelledby="testimonials-heading">
      <Reveal y={10}>
        <Eyebrow as="h2" id="testimonials-heading" index="06" className="justify-center">
          Testimonials
        </Eyebrow>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <TestimonialSlider testimonials={testimonials} />
      </Reveal>
    </Section>
  );
}
