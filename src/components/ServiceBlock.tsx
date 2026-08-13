import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { useRfq } from "@/hooks/useRfq";
import { asset } from "@/lib/asset";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Lightbox } from "./Lightbox";

type ServiceBlockProps = {
  service: Service;
  reverse?: boolean;
};

export function ServiceBlock({ service, reverse = false }: ServiceBlockProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { requestQuote } = useRfq();

  const [primary, ...rest] = service.images;
  const secondary = rest.slice(0, 2);

  return (
    <div
      id={service.slug}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20 border-b border-line last:border-0 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-[0.2em] text-gold">{service.number}</span>
          <span className="h-px w-8 bg-navy/20" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-secondary">
            {service.eyebrow}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep tracking-tight mb-5">{service.name}</h3>

        <div className="space-y-4 text-ink-secondary leading-relaxed mb-6">
          {service.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="space-y-2.5 mb-6">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-2.5 text-sm text-ink">
              <Icon name="check" size={14} className="text-gold mt-1 shrink-0" />
              {capability}
            </li>
          ))}
        </ul>

        {service.technicalSpecs && (
          <div className="mb-6 bg-background-soft border border-line rounded-[6px] p-5">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-navy mb-3">Reference Specifications</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {service.technicalSpecs.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-medium bg-white border border-line rounded-[4px] px-2.5 py-1.5 text-ink"
                >
                  {spec}
                </span>
              ))}
            </div>
            {service.technicalNote && <p className="text-xs text-ink-secondary leading-relaxed">{service.technicalNote}</p>}
          </div>
        )}

        {service.disclaimer && <p className="text-xs text-ink-secondary/80 italic mb-6">{service.disclaimer}</p>}

        <Button
          as="a"
          href="#contact"
          variant="secondary"
          withArrow
          onClick={(e) => {
            e.preventDefault();
            requestQuote(service.cta.inquiryType, service.cta.subject);
          }}
        >
          {service.cta.label}
        </Button>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <motion.button
            type="button"
            onClick={() => setLightboxIndex(0)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-[6px] group focus-visible:outline-2 focus-visible:outline-gold ${
              secondary.length > 0 ? "col-span-2 aspect-[16/10]" : "col-span-2 aspect-[16/9]"
            }`}
            aria-label={`View larger image: ${primary.alt}`}
          >
            <img
              src={asset(primary.src)}
              alt={primary.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/20 transition-colors duration-300" />
            <span className="absolute bottom-3 right-3 bg-white/90 rounded-[4px] p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon name="expand" size={16} className="text-navy" />
            </span>
          </motion.button>

          {secondary.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i + 1)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1), ease: "easeOut" }}
              className="relative overflow-hidden rounded-[6px] aspect-[4/3] group focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`View larger image: ${img.alt}`}
            >
              <img
                src={asset(img.src)}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={service.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        title={service.name}
      />
    </div>
  );
}
