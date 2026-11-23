import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const { contact } = siteConfig;

const details = [
  { icon: Phone, label: "Call us", value: contact.phone, href: contact.phoneHref, external: false },
  { icon: Mail, label: "Email us", value: contact.email, href: contact.emailHref, external: false },
  {
    icon: MapPin,
    label: "Visit our office",
    value: `${contact.address.line1}, ${contact.address.line2}`,
    href: contact.mapsHref,
    external: true,
  },
];

export function ContactDetails() {
  return (
    <ul className="space-y-4">
      {details.map(({ icon: Icon, label, value, href, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-start gap-4 rounded-2xl border border-grey-soft bg-white p-5 transition-all duration-300 hover:border-navy-deep"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-beige text-navy transition-colors group-hover:bg-orange group-hover:text-white">
              <Icon aria-hidden className="size-5" strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-[0.16em] text-slate">{label}</span>
              <span className="mt-1 block font-display font-semibold break-words text-navy-deep">{value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function OfficeHours() {
  return (
    <dl className="space-y-3 text-sm">
      {contact.hours.map((slot) => (
        <div key={slot.days} className="flex justify-between gap-4 border-b border-grey-soft pb-3 last:border-0 last:pb-0">
          <dt className="text-slate">{slot.days}</dt>
          <dd className="font-medium text-navy-deep">{slot.time}</dd>
        </div>
      ))}
    </dl>
  );
}
