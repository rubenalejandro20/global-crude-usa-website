import { company } from "@/data/company";
import { Icon } from "./Icon";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">Email</h3>
        <a
          href={company.emailHref}
          className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-gold-light transition-colors"
        >
          <Icon name="mail" size={20} className="text-gold-light shrink-0" />
          {company.email}
        </a>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">Phone</h3>
        <div className="flex flex-col gap-2">
          <a
            href={company.phone.href}
            className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-gold-light transition-colors"
          >
            <Icon name="phone" size={20} className="text-gold-light shrink-0" />
            {company.phone.display}
          </a>
          <a
            href={company.phoneSecondary.href}
            className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-gold-light transition-colors"
          >
            <Icon name="phone" size={20} className="text-gold-light shrink-0" />
            {company.phoneSecondary.display}
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">Address</h3>
        <div className="flex items-start gap-3 text-white/85 leading-relaxed">
          <Icon name="map-pin" size={20} className="text-gold-light shrink-0 mt-0.5" />
          <address className="not-italic">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <a
        href={company.phone.href}
        className="sm:hidden inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-semibold px-6 py-3 rounded-[4px] mt-2"
      >
        <Icon name="phone" size={16} />
        Call Us
      </a>
    </div>
  );
}
