import type { Metadata } from "next";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqSection } from "@/components/shared/FaqSection";
import { PageHero } from "@/components/shared/PageHero";
import { pricingFaqs } from "@/data/faqs";

const title = "Pricing: Plans for Job Shops to Multi-Plant Groups";
const description =
  "KanchanFlow pricing starts at ₹799 per user per month on annual billing. Compare the Workshop, Factory and Enterprise plans. Onboarding included, 14-day free trial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
  twitter: { title, description },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        sheet="Sheet 03 · Pricing"
        title="Simple per-user pricing. Your shop floor rides free."
        description="Pay for the people who quote, plan and sell. Supervisors and operators who only check order status never count as users."
      />
      <PricingPlans />
      <FaqSection
        id="pricing-faq"
        title="Billing and plan questions."
        faqs={pricingFaqs}
      />
      <CtaBanner
        title="Not sure which plan fits your plant?"
        description="Tell us how many people quote and sell, and which ERP you use. A sales engineer will recommend a plan within one working day."
      />
    </>
  );
}
