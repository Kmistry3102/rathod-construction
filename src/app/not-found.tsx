import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <Container className="relative flex min-h-[70svh] flex-col items-start justify-center py-24">
        <Eyebrow light>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl font-display text-4xl leading-[1.08] font-semibold text-white sm:text-6xl">
          This page isn&apos;t part of the blueprint.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          The page you are looking for may have moved or no longer exists. Let&apos;s get you back on solid ground.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/projects" size="lg" variant="outline-light">
            View projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
