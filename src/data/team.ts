import { images } from "@/data/images";
import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    name: "Rajesh Rathod",
    role: "Founder & Managing Director",
    department: "Leadership",
    bio: "A civil engineer with a passion for craftsmanship, Rajesh founded the company in 2008 and still walks every site personally.",
    experience: "28 years",
    image: { ...images.portraitRajesh, alt: "Rajesh Rathod, Founder & Managing Director" },
  },
  {
    name: "Ananya Mehta",
    role: "Director of Design",
    department: "Leadership",
    bio: "Ananya leads our in-house architecture and interiors studio, shaping design that is as buildable as it is beautiful.",
    experience: "17 years",
    image: { ...images.portraitAnanya, alt: "Ananya Mehta, Director of Design" },
  },
  {
    name: "Vikram Shah",
    role: "Director of Operations",
    department: "Leadership",
    bio: "Vikram oversees programme, procurement and site delivery across our entire portfolio of active projects.",
    experience: "21 years",
    image: { ...images.portraitVikram, alt: "Vikram Shah, Director of Operations" },
  },
  {
    name: "Priya Desai",
    role: "Head of Commercial",
    department: "Leadership",
    bio: "Priya ensures every project is priced transparently and delivered with disciplined cost control.",
    experience: "15 years",
    image: { ...images.portraitPriya, alt: "Priya Desai, Head of Commercial" },
  },
  {
    name: "Arjun Patel",
    role: "Senior Project Manager",
    department: "Projects",
    bio: "Arjun has delivered more than 40 residential and commercial projects, including the Aurora Corporate Tower.",
    experience: "14 years",
    image: { ...images.portraitArjun, alt: "Arjun Patel, Senior Project Manager" },
  },
  {
    name: "Meera Joshi",
    role: "Lead Interior Architect",
    department: "Projects",
    bio: "Meera crafts calm, material-rich interiors for homes, workplaces and hospitality spaces.",
    experience: "11 years",
    image: { ...images.portraitMeera, alt: "Meera Joshi, Lead Interior Architect" },
  },
  {
    name: "Karan Malhotra",
    role: "Head of Structural Engineering",
    department: "Projects",
    bio: "Karan leads our engineering team, solving complex structural challenges with elegant solutions.",
    experience: "16 years",
    image: { ...images.portraitKaran, alt: "Karan Malhotra, Head of Structural Engineering" },
  },
  {
    name: "Nisha Kapoor",
    role: "HSE & Quality Manager",
    department: "Projects",
    bio: "Nisha champions our zero-harm culture and the 140-point quality protocol on every site.",
    experience: "12 years",
    image: { ...images.portraitNisha, alt: "Nisha Kapoor, HSE & Quality Manager" },
  },
];
