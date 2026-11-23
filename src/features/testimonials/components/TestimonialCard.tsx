import Link from "next/link";
import { Quote } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-grey-soft bg-white p-8 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgb(16_51_66/0.35)] sm:p-9">
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} />
        <Quote aria-hidden className="size-8 fill-orange/10 text-orange" strokeWidth={1.25} />
      </div>
      <blockquote className="mt-6 flex-1 leading-relaxed text-navy-deep">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-grey-soft pt-6">
        <Avatar name={testimonial.name} image={testimonial.image} className="size-12" />
        <div className="min-w-0">
          <p className="font-display font-semibold text-navy-deep">{testimonial.name}</p>
          <p className="text-sm text-slate">
            {testimonial.role},{" "}
            {testimonial.projectSlug ? (
              <Link href={`/projects/${testimonial.projectSlug}`} className="underline-offset-4 hover:text-orange hover:underline">
                {testimonial.company}
              </Link>
            ) : (
              testimonial.company
            )}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
