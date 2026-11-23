import {
  Award,
  BadgeCheck,
  Clock,
  Eye,
  Gem,
  Handshake,
  HardHat,
  Leaf,
  ShieldCheck,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import type { Feature, Milestone, ProcessStep, Stat } from "@/types";

export const stats: Stat[] = [
  { value: 18, suffix: "+", label: "Years of experience" },
  { value: 350, suffix: "+", label: "Projects delivered" },
  { value: 4.2, suffix: "M", label: "Sq. ft. constructed" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export const whyChooseUs: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Uncompromising quality",
    description:
      "Every material, joint and finish is inspected against a 140-point quality protocol before handover.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    description:
      "Disciplined scheduling and weekly progress reporting keep 96% of our projects on or ahead of programme.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    description:
      "Itemised estimates, open-book costing and no hidden variations — you always know where your budget goes.",
  },
  {
    icon: HardHat,
    title: "Safety first, always",
    description:
      "Zero-harm site culture backed by certified safety officers and daily toolbox briefings on every project.",
  },
  {
    icon: Users,
    title: "One accountable team",
    description:
      "Design, engineering and construction under one roof, with a single point of contact from concept to keys.",
  },
  {
    icon: Leaf,
    title: "Built to last sustainably",
    description:
      "Energy-efficient systems, responsibly sourced materials and waste-reduction practices built into every plan.",
  },
];

export const workProcess: ProcessStep[] = [
  {
    title: "Consultation",
    description:
      "We listen first — understanding your vision, site, budget and timeline in a detailed discovery session.",
  },
  {
    title: "Design & Planning",
    description:
      "Architects and engineers translate ideas into drawings, 3D visualisations, approvals and a fixed programme.",
  },
  {
    title: "Construction",
    description:
      "Skilled crews execute with precision under dedicated project managers and rigorous quality checkpoints.",
  },
  {
    title: "Handover & Care",
    description:
      "A meticulous snag-free handover, complete documentation and a structured post-completion warranty.",
  },
];

export const coreValues: Feature[] = [
  {
    icon: Gem,
    title: "Craftsmanship",
    description: "We treat every detail as a signature — precise, considered and enduring.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honest advice, transparent costs and commitments we keep without exception.",
  },
  {
    icon: BadgeCheck,
    title: "Accountability",
    description: "One team owns the outcome, from the first sketch to the final walkthrough.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We benchmark ourselves against the best and raise the standard on every site.",
  },
];

export const missionVision: Feature[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build spaces of lasting value through precise engineering, honest partnerships and craftsmanship that stands the test of time.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's most trusted design-led construction partner, recognised for quality, transparency and architectural excellence.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Founded in Ahmedabad",
    description: "Rajesh Rathod starts the company with a crew of twelve and a focus on bespoke homes.",
  },
  {
    year: "2013",
    title: "Commercial expansion",
    description: "Delivered our first corporate campus and established a dedicated commercial division.",
  },
  {
    year: "2017",
    title: "Design studio launched",
    description: "In-house architecture and interiors studio brings design and build under one roof.",
  },
  {
    year: "2021",
    title: "ISO 9001 & 45001 certified",
    description: "Formalised our quality and occupational safety systems across every site.",
  },
  {
    year: "2025",
    title: "350+ projects milestone",
    description: "Crossed 4 million sq. ft. of completed space across residential, commercial and industrial work.",
  },
];

export const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 45001:2018 Occupational Safety",
  "IGBC Green Building Member",
  "CREDAI Gujarat Member",
] as const;
