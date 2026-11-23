import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/features/services/components/ServiceCard";
import type { Service } from "@/types";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal as="li" key={service.slug} delay={(index % 3) * 0.08}>
          <ServiceCard service={service} index={index} />
        </Reveal>
      ))}
    </ul>
  );
}
