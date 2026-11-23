/** IDs of the homepage sections, used for anchors and scroll-spy. */
export type SectionId = "top" | "about" | "services" | "projects" | "why-us" | "process" | "testimonials" | "contact";

export interface NavItem {
  label: string;
  section: SectionId;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

/** A short, single-word promise with a brief caption. */
export interface Highlight {
  word: string;
  caption: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: ImageAsset;
}

export type ProjectCategory = "Residential" | "Commercial" | "Interiors" | "Industrial";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  image: ImageAsset;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
