import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/features/contact/components/ContactForm";

const { contact } = siteConfig;

const details = [
  { label: "Call", value: contact.phone, href: contact.phoneHref },
  { label: "Email", value: contact.email, href: contact.emailHref },
  { label: "Visit", value: `${contact.address.line1}, ${contact.address.line2}`, href: contact.mapsHref, external: true },
];

/** Contact: a deep-navy details panel beside the enquiry form. */
export function ContactSection() {
  return (
    <Section id="contact" tone="white" aria-labelledby="contact-heading">
      <div className="grid overflow-hidden rounded-[12px] border border-line lg:grid-cols-12">
        {/* Details panel */}
        <div className="bg-navy-deep p-6 text-white sm:p-10 lg:col-span-5 lg:p-10">
          <SectionHeading
            id="contact-heading"
            light
            index="07"
            eyebrow="Contact us"
            title={[
              "Have a project",
              <span key="accent" className="text-orange">
                in mind?
              </span>,
            ]}
            description="Tell us a little about it — we reply within one business day."
          />

          <Reveal delay={0.2}>
            <dl className="mt-6 divide-y sm:mt-8 divide-white/12 border-y border-white/12">
              {details.map((item) => (
                <div key={item.label} className="flex gap-6 py-4">
                  <dt className="w-14 shrink-0 pt-0.5 text-[0.65rem] font-semibold tracking-[0.26em] text-white/50 uppercase">
                    {item.label}
                  </dt>
                  <dd className="min-w-0">
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[0.95rem] break-words text-white transition-colors duration-300 hover:text-orange"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 hidden sm:block">
            <Eyebrow light className="mb-4">
              Studio hours
            </Eyebrow>
            <dl className="space-y-1.5 text-sm">
              {contact.hours.map((slot) => (
                <div key={slot.days} className="flex justify-between gap-4">
                  <dt className="text-white/55">{slot.days}</dt>
                  <dd className="text-white/90">{slot.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.15} className="flex items-center p-6 sm:p-10 lg:col-span-7 lg:p-10 xl:p-12">
          <div className="w-full">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
