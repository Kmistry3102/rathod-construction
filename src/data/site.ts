import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Rathod Construction",
  shortName: "Rathod",
  tagline: "Building with precision. Delivering with integrity.",
  description:
    "Rathod Construction is a design-led construction company delivering premium residential, commercial, interior and industrial projects with uncompromising quality, transparency and craftsmanship.",
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
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
    { label: "X", href: "https://x.com", icon: "x" },
  ],
} as const;

export type SocialIconName = (typeof siteConfig.socials)[number]["icon"];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const quoteCta: NavItem = { label: "Get a Quote", href: "/get-a-quote" };
