import { SectionHeader } from "@/components/SectionHeader";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy-deep overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #C9933A 0, #C9933A 1px, transparent 1px, transparent 32px)",
        }}
        aria-hidden="true"
      />

      <div className="relative container-industrial">
        <SectionHeader
          number="05"
          eyebrow="Contact"
          title="Let's Talk About Your Requirements"
          description="Send us your equipment, material, procurement, or service requirements and our team will get back to you."
          tone="dark"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
