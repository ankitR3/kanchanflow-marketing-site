import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { IndustryFigures } from "@/components/sections/home/IndustryFigures";
import { ModuleSchedule } from "@/components/sections/home/ModuleSchedule";
import { PricingQuote } from "@/components/sections/home/PricingQuote";
import { ProductTour } from "@/components/sections/home/ProductTour";
import { RevisionTable } from "@/components/sections/home/RevisionTable";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FaqSection } from "@/components/shared/FaqSection";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name}: Manufacturing CRM for Quotes, BOMs and Work Orders`;
const description =
  "Cost RFQs in minutes, turn approved quotes into work orders and track every order on one pipeline. The CRM built for Indian manufacturers. Free 14-day trial.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductTour />
      <RevisionTable />
      <ModuleSchedule />
      <IndustryFigures />
      <PricingQuote />
      <FaqSection
        id="faq"
        title="Questions plant owners ask us first."
        faqs={homeFaqs}
      />
      <CtaBanner />
    </>
  );
}
