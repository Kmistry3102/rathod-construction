import { Container } from "@/components/ui/Section";

/** Placeholder matching PageHero's footprint while URL-specific content resolves. */
export function PageHeroSkeleton() {
  return (
    <section aria-busy="true" aria-label="Loading" className="relative overflow-hidden bg-navy-deep">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <Container className="relative animate-pulse pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="h-3 w-40 rounded-full bg-white/10" />
        <div className="mt-12 max-w-3xl space-y-5 lg:mt-16">
          <div className="h-3 w-32 rounded-full bg-white/15" />
          <div className="h-12 w-4/5 rounded-2xl bg-white/10 sm:h-16" />
          <div className="h-4 w-3/5 rounded-full bg-white/10" />
        </div>
      </Container>
    </section>
  );
}
