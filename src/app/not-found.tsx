import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Eyebrow, headingStyles } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <Container className="py-24 text-center sm:py-32">
        <Eyebrow index="404" className="justify-center">
          Page not found
        </Eyebrow>
        <h1 className={`mx-auto mt-8 max-w-2xl text-navy-deep ${headingStyles}`}>
          This page isn&apos;t part of the <span className="text-orange">blueprint.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-[1.75] text-slate">
          Everything about Rathod Construction now lives on a single page.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex h-12 items-center gap-2.5 rounded-[10px] bg-navy-deep px-6 text-[0.95rem] font-medium text-white transition-[background-color,translate] duration-500 ease-premium hover:-translate-y-0.5 hover:bg-navy"
        >
          Back to home
          <ArrowRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
