import { images } from "@/data/images";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Construction",
    shortTitle: "Residential",
    summary: "Villas, homes and apartments, built to last.",
    image: images.residenceDusk,
  },
  {
    slug: "commercial",
    title: "Commercial Construction",
    shortTitle: "Commercial",
    summary: "Offices, retail and mixed-use spaces, delivered on time.",
    image: images.officeTowers,
  },
  {
    slug: "interiors",
    title: "Interior Fit-out & Renovation",
    shortTitle: "Interiors",
    summary: "Refined interiors and thoughtful renovations.",
    image: images.livingRoom,
  },
  {
    slug: "design",
    title: "Architectural Design & Planning",
    shortTitle: "Design",
    summary: "From first concept to approved drawings.",
    image: images.blueprint,
  },
  {
    slug: "management",
    title: "Project Management",
    shortTitle: "Management",
    summary: "Keeping every build on time and on budget.",
    image: images.engineersOnSite,
  },
  {
    slug: "industrial",
    title: "Industrial & Infrastructure",
    shortTitle: "Industrial",
    summary: "Warehouses, factories and site infrastructure.",
    image: images.earthworks,
  },
];
