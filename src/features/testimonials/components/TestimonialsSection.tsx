import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";
import { TestimonialSlider } from "@/features/testimonials/components/TestimonialSlider";

export function TestimonialsSection() {
  return (
    <Section tone="ivory" aria-labelledby="testimonials-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Testimonials"
            title="Trusted by homeowners, developers and brands."
          />
          <div className="mt-10 flex items-center gap-5">
            <p className="font-display text-5xl font-semibold tracking-tight text-navy-deep">4.9</p>
            <div>
              <StarRating rating={5} />
              <p className="mt-1.5 text-sm text-slate">Average from 200+ client reviews</p>
            </div>
          </div>
          <ButtonLink href="/testimonials" variant="outline" withArrow className="mt-10">
            Read all stories
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <TestimonialSlider testimonials={testimonials} />
        </Reveal>
      </div>
    </Section>
  );
}
