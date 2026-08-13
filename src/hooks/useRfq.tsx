import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { InquiryType } from "@/data/inquiry-types";

type RfqPrefill = {
  inquiryType: InquiryType;
  subject: string;
} | null;

type RfqContextValue = {
  prefill: RfqPrefill;
  /** Sets the desired inquiry type/subject and smooth-scrolls the contact form into view. */
  requestQuote: (inquiryType: InquiryType, subject: string) => void;
  clearPrefill: () => void;
};

const RfqContext = createContext<RfqContextValue | null>(null);

export function RfqProvider({ children }: { children: ReactNode }) {
  const [prefill, setPrefill] = useState<RfqPrefill>(null);

  const requestQuote = useCallback((inquiryType: InquiryType, subject: string) => {
    setPrefill({ inquiryType, subject });
    requestAnimationFrame(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const clearPrefill = useCallback(() => setPrefill(null), []);

  const value = useMemo(() => ({ prefill, requestQuote, clearPrefill }), [prefill, requestQuote, clearPrefill]);

  return <RfqContext.Provider value={value}>{children}</RfqContext.Provider>;
}

export function useRfq(): RfqContextValue {
  const ctx = useContext(RfqContext);
  if (!ctx) throw new Error("useRfq must be used within RfqProvider");
  return ctx;
}
