import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { StarRating } from "@/components/ui/StarRating";
import { images } from "@/data/images";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Testimonials",
  description:
    "Read what homeowners, developers and businesses say about building with Rathod Construction — 4.9/5 average from 200+ client reviews.",
  path: "/testimonials",
  image: images.timberHouse,
});

const highlights = [
  { value: "4.9/5", label: "Average client rating" },
  { value: "200+", label: "Verified client reviews" },
  { value: "72%", label: "Clients from referrals" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="The best measure of our work is our clients' words."
        description="Many of our projects come from referrals and repeat clients. Here is what some of them have to say."
        image={images.timberHouse}
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />

      <section aria-label="Review summary" className="border-b border-grey-soft bg-white">
        <Container>
          <dl className="grid divide-grey-soft sm:grid-cols-3 sm:divide-x max-sm:divide-y">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center py-10 text-center">
                <dt className="order-2 mt-2 text-sm text-slate">{item.label}</dt>
                <dd className="order-1 font-display text-4xl font-semibold tracking-tight text-navy-deep">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section tone="ivory" aria-label="Client testimonials">
        <div className="mb-12 flex items-center justify-center gap-3">
          <StarRating rating={5} />
          <p className="text-sm font-medium text-slate">Rated excellent by our clients</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.name} delay={(index % 3) * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection title="Become our next success story." />
    </>
  );
}
