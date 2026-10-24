import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuotationDocument } from "./QuotationDocument";

export function PricingQuote() {
  return (
    <Section
      aria-labelledby="pricing-quote-heading"
      containerClassName="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10"
    >
      <div className="flex flex-col items-start gap-8 lg:col-span-5">
        <SectionHeading
          id="pricing-quote-heading"
          title="Our pricing, written out the way you'd quote a customer."
          description="Per user, per month. No implementation partner, no setup fee, and supervisors who only check order status never count as users."
        />
        <Button href="/pricing" variant="outline" size="lg">
          Compare plans in detail
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
      <div className="lg:col-span-7">
        <QuotationDocument />
      </div>
    </Section>
  );
}
