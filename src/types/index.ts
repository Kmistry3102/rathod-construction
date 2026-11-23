import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  description: string[];
  image: ImageAsset;
  gallery: ImageAsset[];
  offerings: string[];
  benefits: Feature[];
  process: ProcessStep[];
  faqs: Faq[];
}

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interiors"
  | "Industrial";

export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  serviceSlug: Service["slug"];
  location: string;
  year: number;
  status: ProjectStatus;
  client: string;
  area: string;
  duration: string;
  value: string;
  summary: string;
  overview: string[];
  challenge: string;
  solution: string;
  highlights: string[];
  image: ImageAsset;
  gallery: ImageAsset[];
  featured: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  department: "Leadership" | "Projects";
  bio: string;
  experience: string;
  image: ImageAsset;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  projectSlug?: Project["slug"];
  rating: 1 | 2 | 3 | 4 | 5;
  image?: ImageAsset;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
