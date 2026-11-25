import type { NavItem, SectionId } from "@/types";

export const siteConfig = {
  name: "Rathod Construction",
  tagline: "Building with precision. Delivering with integrity.",
  description:
    "Rathod Construction is a design-led construction studio delivering premium residential, commercial, interior and industrial projects with uncompromising quality, transparency and craftsmanship.",
  url: "https://www.rathodconstruction.in",
  foundedYear: 1995,
  logo: {
    src: "/brand/rathod-logo.png",
    width: 673,
    height: 626,
    alt: "Rathod Construction logo",
  },
  contact: {
    phone: "+91 8188877766",
    phoneHref: "tel:+918188877766",
    email: "rathodconstruction7766@gmail.com",
    emailHref: "mailto:rathodconstruction7766@gmail.com",
    address: {
      line1: "Rathod House, 4th Floor, S.G. Highway",
      line2: "Ahmedabad, Gujarat 380054",
      country: "India",
    },
    mapsHref: "https://maps.google.com/?q=S.G.+Highway+Ahmedabad",
  },
} as const;

/** Header navigation — every item scrolls to a section of the single page. */
export const mainNav: NavItem[] = [
  { label: "Home", section: "top" },
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  {
    label: "Projects",
    section: "projects",
    children: [
      { label: "Ongoing Projects", status: "ongoing" },
      { label: "Completed Projects", status: "completed" },
    ],
  },
];

export const quoteCta: { label: string; section: SectionId } = { label: "Contact Us", section: "contact" };
