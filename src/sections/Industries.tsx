import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@/components/Icon";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-navy-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative container-industrial">
        <SectionHeader
          number="04"
          eyebrow="Industries"
          title="Supporting Complex Industrial Environments"
          description="Global Crude USA Inc. supports clients across the following industrial and energy sectors."
          tone="dark"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[6px] overflow-hidden">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="bg-navy-deep p-7 sm:p-8 flex flex-col gap-4 hover:bg-navy transition-colors duration-300"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-[4px] bg-white/5 text-gold-light">
                <Icon name={industry.icon} size={22} />
              </span>
              <h3 className="text-white font-bold text-base leading-snug">{industry.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
