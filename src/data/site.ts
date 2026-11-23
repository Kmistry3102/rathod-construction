import type { NavItem, SectionId } from "@/types";

export const siteConfig = {
  name: "Rathod Construction",
  tagline: "Building with precision. Delivering with integrity.",
  description:
    "Rathod Construction is a design-led construction studio delivering premium residential, commercial, interior and industrial projects with uncompromising quality, transparency and craftsmanship.",
  url: "https://www.rathodconstruction.com",
  foundedYear: 2008,
  logo: {
    src: "/brand/rathod-logo.png",
    width: 673,
    height: 626,
    alt: "Rathod Construction logo",
  },
  contact: {
    phone: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    email: "hello@rathodconstruction.com",
    emailHref: "mailto:hello@rathodconstruction.com",
    address: {
      line1: "Rathod House, 4th Floor, S.G. Highway",
      line2: "Ahmedabad, Gujarat 380054",
      country: "India",
    },
    mapsHref: "https://maps.google.com/?q=S.G.+Highway+Ahmedabad",
    hours: [
      { days: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
      { days: "Saturday", time: "10:00 AM – 4:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
  ],
} as const;

/** Header navigation — every item scrolls to a section of the single page. */
export const mainNav: NavItem[] = [
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Projects", section: "projects" },
  { label: "Why Us", section: "why-us" },
  { label: "Process", section: "process" },
  { label: "Testimonials", section: "testimonials" },
  { label: "Contact", section: "contact" },
];

export const quoteCta: { label: string; section: SectionId } = { label: "Get a Quote", section: "contact" };
