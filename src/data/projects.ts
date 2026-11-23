import { images } from "@/data/images";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "the-meridian-residence",
    title: "The Meridian Residence",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    year: 2025,
    image: images.villaPool,
  },
  {
    slug: "aurora-corporate-tower",
    title: "Aurora Corporate Tower",
    category: "Commercial",
    location: "GIFT City, Gandhinagar",
    year: 2024,
    image: images.officeTowers,
  },
  {
    slug: "cedar-grove-villas",
    title: "Cedar Grove Villas",
    category: "Residential",
    location: "Vadodara, Gujarat",
    year: 2024,
    image: images.timberHouse,
  },
  {
    slug: "atelier-office-fit-out",
    title: "Atelier Office Fit-out",
    category: "Interiors",
    location: "Mumbai, Maharashtra",
    year: 2025,
    image: images.officeOpen,
  },
  {
    slug: "linear-house",
    title: "Linear House",
    category: "Residential",
    location: "Pune, Maharashtra",
    year: 2023,
    image: images.linearHouse,
  },
  {
    slug: "northgate-logistics-hub",
    title: "Northgate Logistics Hub",
    category: "Industrial",
    location: "Sanand, Gujarat",
    year: 2024,
    image: images.warehouse,
  },
];
