import { CurrentYear } from "@/components/layout/CurrentYear";
import { Logo } from "@/components/layout/Logo";
import { SectionLink } from "@/components/navigation/SectionLink";
import { Container } from "@/components/ui/Section";
import { services } from "@/data/services";
import { mainNav, siteConfig } from "@/data/site";

function FooterHeading({ children }: { children: string }) {
  return <h2 className="mb-5 font-display text-[0.7rem] font-semibold tracking-[0.28em] text-slate uppercase">{children}</h2>;
}

const linkClass = "text-[0.9rem] text-navy-deep transition-colors duration-300 hover:text-orange";

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-line bg-white text-navy-deep">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo eager className="h-16" />
            <p className="mt-6 max-w-xs text-[0.9rem] leading-[1.75] text-slate">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.section}>
                  <SectionLink section={item.section} className={linkClass}>
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5 text-[0.9rem] text-slate">
              {services.map((service) => (
                <li key={service.slug}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <FooterHeading>Studio</FooterHeading>
            <address className="space-y-4 text-[0.9rem] leading-[1.75] not-italic">
              <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="block text-slate hover:text-orange">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </a>
              <a href={contact.phoneHref} className={`block ${linkClass}`}>
                {contact.phone}
              </a>
              <a href={contact.emailHref} className={`block break-all ${linkClass}`}>
                {contact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-line py-7 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-8" aria-label="Social media">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-[0.2em] uppercase transition-colors hover:text-orange"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
