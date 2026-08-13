import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { valueProps } from "@/data/why-us";

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-background-soft">
      <div className="container-industrial">
        <SectionHeader eyebrow="Why Global Crude" title="Built Around Industrial & Oilfield Requirements" className="mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white border border-line rounded-[6px] p-7 flex flex-col gap-3"
            >
              <span className="font-mono text-xs text-gold tracking-[0.2em]">0{i + 1}</span>
              <h3 className="text-lg font-bold text-navy-deep">{item.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
