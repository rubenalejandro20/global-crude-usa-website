import { useState } from "react";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { asset } from "@/lib/asset";
import { Icon } from "./Icon";
import { Modal } from "./Modal";
import { PrivacyPolicyContent, TermsOfUseContent } from "./LegalContent";

export function Footer() {
  const [legalOpen, setLegalOpen] = useState<"privacy" | "terms" | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-industrial py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-12 lg:gap-8">
          <div className="flex flex-col gap-5">
            <img
              src={asset("/images/brand/global-crude-logo-white.png")}
              alt="Global Crude USA Inc."
              className="h-12 w-auto self-start shrink-0"
            />
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">{company.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-5">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li>
                <a href={company.emailHref} className="inline-flex items-center gap-2 hover:text-gold-light transition-colors">
                  <Icon name="mail" size={16} className="text-gold-light shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phone.href} className="inline-flex items-center gap-2 hover:text-gold-light transition-colors">
                  <Icon name="phone" size={16} className="text-gold-light shrink-0" />
                  {company.phone.display}
                </a>
              </li>
              <li>
                <a href={company.phoneSecondary.href} className="inline-flex items-center gap-2 hover:text-gold-light transition-colors">
                  <Icon name="phone" size={16} className="text-gold-light shrink-0" />
                  {company.phoneSecondary.display}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 pt-1">
                <Icon name="map-pin" size={16} className="text-gold-light shrink-0 mt-0.5" />
                <span>
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year} {company.name} All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalOpen("privacy")}
              className="text-xs text-white/50 hover:text-gold-light transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalOpen("terms")}
              className="text-xs text-white/50 hover:text-gold-light transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      <Modal open={legalOpen === "privacy"} onClose={() => setLegalOpen(null)} title="Privacy Policy">
        <PrivacyPolicyContent />
      </Modal>
      <Modal open={legalOpen === "terms"} onClose={() => setLegalOpen(null)} title="Terms of Use">
        <TermsOfUseContent />
      </Modal>
    </footer>
  );
}
