import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@/components/Icon";
import { Lightbox } from "@/components/Lightbox";
import { Button } from "@/components/Button";
import { useRfq } from "@/hooks/useRfq";
import { equipmentCategories } from "@/data/equipment";

export function Equipment() {
  const [active, setActive] = useState<{ categoryIndex: number; imageIndex: number } | null>(null);
  const { requestQuote } = useRfq();

  const activeCategory = active ? equipmentCategories[active.categoryIndex] : null;

  return (
    <section id="equipment" className="relative py-24 sm:py-32 bg-background-soft">
      <div className="container-industrial">
        <SectionHeader
          number="03"
          eyebrow="Equipment & Products"
          title="Equipment for Demanding Operations"
          description="Explore the equipment and product categories Global Crude USA Inc. sources for oilfield, petrochemical, and industrial clients. Select a category to view additional photos."
          className="mb-14"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {equipmentCategories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-line rounded-[6px] overflow-hidden flex flex-col"
            >
              <button
                type="button"
                onClick={() => setActive({ categoryIndex: i, imageIndex: 0 })}
                className="relative aspect-[4/3] overflow-hidden w-full focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`View ${category.name} photos`}
              >
                <img
                  src={category.images[0].src}
                  alt={category.images[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy-deep/0 to-navy-deep/0" />
                <span className="absolute top-3 right-3 bg-white/90 rounded-[4px] p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="expand" size={16} className="text-navy" />
                </span>
              </button>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-bold text-navy-deep">{category.name}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed flex-1">{category.description}</p>
                <button
                  type="button"
                  onClick={() => requestQuote(category.inquiryType, category.subject)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group/link mt-1 self-start"
                >
                  Request a Quote
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            withArrow
            onClick={(e) => {
              e.preventDefault();
              requestQuote("Equipment Request", "Equipment Inquiry");
            }}
          >
            Request Equipment Information
          </Button>
        </div>
      </div>

      {activeCategory && (
        <Lightbox
          images={activeCategory.images}
          index={active ? active.imageIndex : null}
          onClose={() => setActive(null)}
          onNavigate={(imageIndex) => setActive((prev) => (prev ? { ...prev, imageIndex } : prev))}
          title={activeCategory.name}
        />
      )}
    </section>
  );
}
