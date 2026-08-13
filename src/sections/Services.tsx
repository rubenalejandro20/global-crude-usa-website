import { SectionHeader } from "@/components/SectionHeader";
import { ServiceBlock } from "@/components/ServiceBlock";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white">
      <div className="container-industrial">
        <SectionHeader
          number="02"
          eyebrow="What We Do"
          title="Integrated Oilfield & Industrial Solutions"
          description="From well-site separation equipment to pipes, gaskets, and rotating machinery, Global Crude USA Inc. supports the products and services demanding operations rely on."
          className="mb-4"
        />

        <div>
          {services.map((service, i) => (
            <ServiceBlock key={service.slug} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
