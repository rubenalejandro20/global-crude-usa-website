import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { asset } from "@/lib/asset";

const capabilities = [
  "Electrical equipment",
  "Mechanical equipment",
  "Electromechanical applications",
  "Industrial materials",
  "Oilfield products",
  "Gas industry products",
  "Petrochemical products",
  "Metal-mechanical fabrication",
  "Pumping systems & fluid transfer",
  "Turbomachinery & turbogenerators",
  "Well testing",
  "Three-phase separator equipment",
  "Pipes and tubing",
  "Industrial gaskets",
  "Procurement",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container-industrial grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader
            number="01"
            eyebrow="Who We Are"
            title="Supporting Critical Operations Across Oil, Gas & Industry"
          />

          <div className="mt-8 space-y-5 text-ink-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              Global Crude USA Inc. provides equipment, industrial products, procurement solutions, and specialized
              services supporting oil, gas, petrochemical, and industrial operations.
            </p>
            <p>
              Our background spans electrical and mechanical equipment, metal-mechanical fabrication, pumping and
              fluid transfer systems, turbomachinery, well testing, and the pipes, tubing, and gaskets that keep
              critical operations connected. We help operators, contractors, and industrial buyers source what they
              need and keep it running.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] max-w-md mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 rounded-[6px] overflow-hidden shadow-xl"
            >
              <img
                src={asset("/images/about/about-separator.jpg")}
                alt="Three-phase separator equipment deployed for well testing operations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="absolute -bottom-8 -left-6 sm:-left-10 w-[52%] aspect-[4/3] rounded-[6px] overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src={asset("/images/about/about-cnc.jpg")}
                alt="CNC machining center used for industrial part fabrication"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="hidden sm:flex absolute -top-6 -right-6 w-28 h-28 rounded-[6px] bg-navy-deep items-center justify-center shadow-xl p-4 text-center"
            >
              <span className="text-white text-[11px] font-semibold leading-snug tracking-wide">
                Irving, Texas — U.S. Based
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
