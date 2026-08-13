import { motion } from "framer-motion";
import { useRfq } from "@/hooks/useRfq";
import { asset } from "@/lib/asset";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export function Hero() {
  const { requestQuote } = useRfq();

  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] max-h-[980px] w-full overflow-hidden bg-navy-deep">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={asset("/images/hero/refinery-tanks-dusk.jpg")}
          alt="Industrial refinery storage tanks and processing towers at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/20 to-transparent" />

      <div className="relative h-full container-industrial flex flex-col justify-end pb-28 sm:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold-light mb-5"
        >
          Global Crude USA Inc.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight max-w-3xl"
        >
          Oilfield Equipment &amp; Industrial Solutions
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="h-[3px] w-24 bg-gold mt-7 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="text-white/85 text-base sm:text-lg max-w-2xl mt-7 leading-relaxed"
        >
          Global Crude USA Inc. provides oilfield equipment, industrial materials, mechanical solutions, well
          services, and procurement support for demanding oil, gas, petrochemical, and industrial operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
        >
          <Button as="a" href="#services" variant="primary" size="lg" withArrow>
            Explore Our Capabilities
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="ghost"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              requestQuote("Request a Quote", "Request for Quote");
            }}
          >
            Request a Quote
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to discover"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Scroll to Discover</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="chevron-down" size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
