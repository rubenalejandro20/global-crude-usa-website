import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

type CTASectionProps = {
  title: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  children: ReactNode;
  id?: string;
};

export function CTASection({ title, description, backgroundImage, children, id }: CTASectionProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy-deep">
      {backgroundImage && (
        <>
          <img src={asset(backgroundImage)} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/70" />
        </>
      )}
      {!backgroundImage && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9933A 0, #C9933A 1px, transparent 1px, transparent 32px)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative container-industrial py-20 sm:py-24 flex flex-col items-center text-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-[1.1] tracking-tight"
        >
          {title}
        </motion.h2>
        {description && <p className="text-white/75 text-base sm:text-lg max-w-xl">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">{children}</div>
      </div>
    </section>
  );
}
