import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { useRfq } from "@/hooks/useRfq";
import { Icon } from "./Icon";
import { Button } from "./Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { requestQuote } = useRfq();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white/95 backdrop-blur-sm border-b border-line shadow-[0_1px_12px_rgba(5,21,35,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container-industrial flex items-center justify-between h-[76px]">
        <a href="#home" className="flex items-center shrink-0" aria-label="Global Crude USA Inc. home">
          <img
            src={isSolid ? "/images/brand/global-crude-logo.png" : "/images/brand/global-crude-logo-white.png"}
            alt="Global Crude USA Inc."
            className="h-11 sm:h-12 w-auto transition-opacity duration-300"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isSolid ? "text-navy hover:text-gold" : "text-white hover:text-gold-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            as="a"
            href="#contact"
            size="md"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              requestQuote("Request a Quote", "Request for Quote");
            }}
          >
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-[4px] transition-colors ${
            isSolid ? "text-navy" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={26} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-white border-t border-line overflow-hidden"
          >
            <nav className="container-industrial flex flex-col py-4" aria-label="Mobile">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-semibold text-navy border-b border-line last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-5">
                <a
                  href={company.phone.href}
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm"
                >
                  <Icon name="phone" size={16} />
                  Call {company.phone.display}
                </a>
                <Button
                  as="a"
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    requestQuote("Request a Quote", "Request for Quote");
                  }}
                >
                  Request a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
