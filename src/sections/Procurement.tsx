import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useRfq } from "@/hooks/useRfq";
import { procurementSteps } from "@/data/procurement";

export function Procurement() {
  const { requestQuote } = useRfq();

  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="container-industrial">
        <SectionHeader
          eyebrow="Procurement"
          title="Industrial Procurement Without the Complexity"
          description="Global Crude USA Inc. helps customers source equipment sourcing, industrial materials, replacement components, oilfield equipment, mechanical and electrical equipment, piping materials, and specialized industrial products."
          align="center"
          className="mb-16 mx-auto"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div
            className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-line"
            aria-hidden="true"
          />
          {procurementSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex flex-col gap-4"
            >
              <span className="relative z-10 inline-flex items-center justify-center h-12 w-12 rounded-full bg-navy-deep text-gold-light font-mono text-sm font-bold border-4 border-white">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-navy-deep">{step.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            withArrow
            onClick={(e) => {
              e.preventDefault();
              requestQuote("Procurement", "Send Us Your Requirements");
            }}
          >
            Send Us Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}
