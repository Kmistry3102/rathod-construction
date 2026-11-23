import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/company";
import { StatCounter } from "@/features/company/components/StatCounter";

export function StatsSection() {
  return (
    <section aria-label="Company statistics" className="relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <Container className="relative">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="flex flex-col border-white/10 px-2 py-12 text-center max-lg:nth-[-n+2]:border-b odd:border-r lg:border-r lg:py-16 lg:last:border-r-0"
            >
              <dt className="order-2 mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
