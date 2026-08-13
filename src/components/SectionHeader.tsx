import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  number?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        {number && (
          <span
            className={`font-mono text-sm tracking-[0.2em] ${isDark ? "text-gold-light" : "text-gold"}`}
            aria-hidden="true"
          >
            {number}
          </span>
        )}
        <span className={`h-px w-10 ${isDark ? "bg-white/30" : "bg-navy/20"}`} />
        <span
          className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${
            isDark ? "text-white/70" : "text-ink-secondary"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight max-w-3xl ${
          isDark ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${isDark ? "text-white/75" : "text-ink-secondary"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
