import Image from "next/image";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { quoteCta, siteConfig } from "@/data/site";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Let's build something remarkable together.",
  description = "Tell us about your project and our team will respond within one business day with next steps and an initial consultation.",
}: CtaSectionProps) {
  return (
    <section aria-label="Start your project" className="bg-ivory px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep">
        <Image
          src={images.craneSunset.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        <Container className="py-20 sm:py-24 lg:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow light>Start your project</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href={quoteCta.href} size="lg" withArrow>
                {quoteCta.label}
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="outline-light">
                Contact us
              </ButtonLink>
            </div>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-10 inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/10">
                <Phone aria-hidden className="size-4 text-orange" />
              </span>
              Prefer to talk? Call {siteConfig.contact.phone}
            </a>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
