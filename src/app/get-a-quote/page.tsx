import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { images } from "@/data/images";
import { ContactDetails } from "@/features/contact/components/ContactDetails";
import { QuoteForm } from "@/features/quote/components/QuoteForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Get a Quote",
  description:
    "Request a free, no-obligation quote from Rathod Construction. Share your project details and a senior estimator will respond within two business days.",
  path: "/get-a-quote",
  image: images.blueprint,
});

const nextSteps = [
  { title: "We review your brief", description: "A senior estimator studies your requirements within two business days." },
  { title: "Consultation call", description: "We discuss your goals, site, budget and timeline in detail." },
  { title: "Site visit", description: "Our engineers assess the site and any existing conditions." },
  { title: "Detailed proposal", description: "You receive an itemised estimate, programme and scope." },
];

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us about your project."
        description="Share a few details and we will prepare a transparent, itemised proposal — free and with no obligation."
        image={images.blueprint}
        breadcrumbs={[{ label: "Get a Quote", href: "/get-a-quote" }]}
      />

      <Section tone="ivory" aria-label="Quote request">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-8">
            <div className="rounded-[2rem] border border-grey-soft bg-white p-7 sm:p-10 lg:p-12">
              <h2 className="font-display text-2xl font-semibold text-navy-deep sm:text-3xl">Project enquiry</h2>
              <p className="mt-3 mb-10 text-slate">Fields marked with * are required. It takes about two minutes.</p>
              <QuoteForm />
            </div>
          </Reveal>

          <aside className="space-y-8 lg:col-span-4">
            <Reveal delay={0.1} className="rounded-[2rem] bg-navy-deep p-8 text-white sm:p-10">
              <h2 className="font-display text-xl font-semibold">What happens next</h2>
              <ol className="mt-8 space-y-7">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-orange/60 font-display text-xs font-semibold text-orange">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 flex items-start gap-3 border-t border-white/10 pt-8 text-sm text-white/70">
                <ShieldCheck aria-hidden className="size-5 shrink-0 text-orange" />
                Your information is kept confidential and used only to prepare your proposal.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mb-5 font-display text-lg font-semibold text-navy-deep">Prefer to talk?</h2>
              <ContactDetails />
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
