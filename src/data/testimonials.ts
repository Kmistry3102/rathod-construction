import { images } from "@/data/images";
import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Rathod Construction turned an ambitious design into a home that exceeded every expectation. The cantilever, the pool, the finishes — everything was executed with remarkable precision. Their transparency on cost and programme made the entire journey stress-free.",
    name: "Sameer Kothari",
    role: "Homeowner",
    company: "The Meridian Residence",
    projectSlug: "the-meridian-residence",
    rating: 5,
    image: { ...images.portraitDavid, alt: "Sameer Kothari" },
  },
  {
    quote:
      "Delivering a 22-storey tower two weeks early is almost unheard of. Their planning discipline, safety culture and weekly reporting gave our board complete confidence throughout.",
    name: "Rohan Bhatia",
    role: "Chief Executive Officer",
    company: "Aurora Holdings",
    projectSlug: "aurora-corporate-tower",
    rating: 5,
    image: { ...images.portraitSuit, alt: "Rohan Bhatia" },
  },
  {
    quote:
      "They fitted out two floors above our live office without us losing a single working day. The joinery and acoustic detailing are genuinely world-class.",
    name: "Kavya Iyer",
    role: "Founder & Principal",
    company: "Atelier Design Co.",
    projectSlug: "atelier-office-fit-out",
    rating: 5,
    image: { ...images.portraitSara, alt: "Kavya Iyer" },
  },
  {
    quote:
      "Twelve villas, consistent quality, every handover on schedule. Rathod's team understood that our reputation was on the line and treated it as their own.",
    name: "Harsh Trivedi",
    role: "Managing Partner",
    company: "Cedar Grove Developers",
    projectSlug: "cedar-grove-villas",
    rating: 5,
  },
  {
    quote:
      "Our warehouse was operational before peak season — ten weeks faster than other bids promised. Clear communication and zero surprises from start to finish.",
    name: "Neha Agarwal",
    role: "VP, Infrastructure",
    company: "Northgate Logistics",
    projectSlug: "northgate-logistics-hub",
    rating: 5,
  },
  {
    quote:
      "They transformed our lakeside home into something truly serene. Meera's design sensibility combined with the site team's craftsmanship was a rare pairing.",
    name: "Aditya & Rhea Singh",
    role: "Homeowners",
    company: "The Pavilion House",
    projectSlug: "the-pavilion-house",
    rating: 5,
  },
];
