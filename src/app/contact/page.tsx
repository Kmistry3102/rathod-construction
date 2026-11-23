import Image from "next/image";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { images } from "@/data/images";
import { quoteCta, siteConfig } from "@/data/site";
import { ContactDetails, OfficeHours } from "@/features/contact/components/ContactDetails";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Rathod Construction. Call, email or visit our Ahmedabad office — our team responds within one business day.",
  path: "/contact",
  image: images.officeCorridor,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about what you want to build."
        description="Whether you have a detailed brief or just an idea, we would love to hear from you. Our team responds to every enquiry within one business day."
        image={images.officeCorridor}
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Section tone="ivory" aria-label="Contact options">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-10 lg:col-span-5">
            <Reveal>
              <SectionHeading eyebrow="Get in touch" title="We're here to help." />
            </Reveal>
            <Reveal delay={0.08}>
              <ContactDetails />
            </Reveal>
            <Reveal delay={0.12} className="rounded-2xl border border-grey-soft bg-white p-6">
              <p className="mb-5 flex items-center gap-2 font-display font-semibold text-navy-deep">
                <Clock aria-hidden className="size-4 text-orange" /> Office hours
              </p>
              <OfficeHours />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-display text-sm font-semibold text-navy-deep">Follow our work</p>
              <ul className="mt-4 flex gap-3">
                {siteConfig.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-grey-soft bg-white text-navy-deep transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white"
                    >
                      <SocialIcon name={social.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-grey-soft bg-white p-7 sm:p-10 lg:p-12">
              <h2 className="font-display text-2xl font-semibold text-navy-deep sm:text-3xl">Send us a message</h2>
              <p className="mt-3 mb-10 text-slate">Fields marked with * are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <section aria-label="Our office" className="bg-ivory px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="relative isolate grid overflow-hidden rounded-[2rem] bg-navy-deep lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[28rem]">
            <Image src={images.towersSky.src} alt={images.towersSky.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-orange">Head office</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">Visit our studio</h2>
            <address className="mt-6 leading-relaxed text-white/70 not-italic">
              {siteConfig.contact.address.line1}
              <br />
              {siteConfig.contact.address.line2}, {siteConfig.contact.address.country}
            </address>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={siteConfig.contact.mapsHref} target="_blank" rel="noopener noreferrer" withArrow>
                Get directions
              </ButtonLink>
              <ButtonLink href={quoteCta.href} variant="outline-light">
                {quoteCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
