import type { Metadata } from "next";
import { ComparisonTable } from "@/components/sections/features/ComparisonTable";
import { FeatureRows } from "@/components/sections/features/FeatureRows";
import { SheetIndex } from "@/components/sections/features/SheetIndex";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { PageHero } from "@/components/shared/PageHero";

const title = "Features: Quoting, BOMs, Pipeline and WhatsApp";
const description =
  "See how KanchanFlow handles quote costing, multi-level BOMs, the sales pipeline, WhatsApp approvals, reports and offline mobile sales for manufacturers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  openGraph: { title, description, url: "/features" },
  twitter: { title, description },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        sheet="Sheet 02 · Features"
        title="Everything between the enquiry and the dispatch note."
        description="Six modules that share one record of every customer, part and price. Use them together, and a won deal flows into production without anyone re-typing a number."
      >
        <SheetIndex />
      </PageHero>
      <FeatureRows />
      <ComparisonTable />
      <CtaBanner
        title="See your own parts quoted in KanchanFlow."
        description="Book a 30-minute walkthrough. Bring a drawing and your current rates, and we'll build the quote with you on the call."
      />
    </>
  );
}
