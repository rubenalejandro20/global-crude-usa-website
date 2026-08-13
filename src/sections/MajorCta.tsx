import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { company } from "@/data/company";
import { useRfq } from "@/hooks/useRfq";

export function MajorCta() {
  const { requestQuote } = useRfq();

  return (
    <CTASection
      title="Need Equipment for Your Next Operation?"
      description="Send us your specifications and our team can review your requirement."
      backgroundImage="/images/hero/refinery-towers-vertical.jpg"
    >
      <Button
        as="a"
        href="#contact"
        variant="primary"
        size="lg"
        withArrow
        onClick={(e) => {
          e.preventDefault();
          requestQuote("Request a Quote", "Request for Quote");
        }}
      >
        Request a Quote
      </Button>
      <Button as="a" href={company.phone.href} variant="ghost" size="lg">
        Call Global Crude — {company.phone.display}
      </Button>
    </CTASection>
  );
}
