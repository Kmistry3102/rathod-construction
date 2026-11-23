import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CurrentYear } from "@/components/layout/CurrentYear";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { services } from "@/data/services";
import { mainNav, quoteCta, siteConfig } from "@/data/site";

const companyLinks = [...mainNav.filter((item) => item.href !== "/"), quoteCta];

function FooterHeading({ children }: { children: string }) {
  return <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">{children}</h2>;
}

const linkClass = "text-sm text-white/65 transition-colors duration-300 hover:text-orange";

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="inline-flex rounded-2xl bg-white p-3">
              <Logo className="h-20" />
            </div>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/65">{siteConfig.description}</p>
            <ul className="mt-8 flex gap-3" aria-label="Social media">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white"
                  >
                    <SocialIcon name={social.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={linkClass}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <address className="space-y-5 text-sm not-italic text-white/65">
              <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-orange">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </span>
              </a>
              <a href={contact.phoneHref} className="flex gap-3 hover:text-orange">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex gap-3 break-all hover:text-orange">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />
                {contact.email}
              </a>
              <p className="flex gap-3">
                <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-orange" />
                <span>
                  {contact.hours[0].days}
                  <br />
                  {contact.hours[0].time}
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
