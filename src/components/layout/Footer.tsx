import { CurrentYear } from "@/components/layout/CurrentYear";
import { Logo } from "@/components/layout/Logo";
import { SectionLink } from "@/components/navigation/SectionLink";
import { Container } from "@/components/ui/Section";
import { mainNav, siteConfig } from "@/data/site";

const linkClass = "transition-colors duration-300 hover:text-orange";

/** Minimal footer: logo, section links and contact in one row, then a copyright line. */
export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-line bg-ivory text-navy-deep">
      <Container>
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <Logo eager className="h-12" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
              {mainNav.map((item) => (
                <li key={item.section}>
                  <SectionLink section={item.section} className={linkClass}>
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-1 text-sm not-italic lg:text-right">
            <a href={contact.phoneHref} className={`block ${linkClass}`}>
              {contact.phone}
            </a>
            <a href={contact.emailHref} className={`block wrap-anywhere text-slate ${linkClass}`}>
              {contact.email}
            </a>
          </address>
        </div>

        <p className="border-t border-line py-5 text-xs text-slate">
          © <CurrentYear /> {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
