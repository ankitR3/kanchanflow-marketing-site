import type { ReactNode } from "react";
import { AppWindow } from "@/components/mockups/AppWindow";
import { BomTreeMockup } from "@/components/mockups/BomTreeMockup";
import { MobileAppMockup } from "@/components/mockups/MobileAppMockup";
import { PipelineBoard } from "@/components/mockups/PipelineBoard";
import { QuoteBuilderMockup } from "@/components/mockups/QuoteBuilderMockup";
import { ReportsMockup } from "@/components/mockups/ReportsMockup";
import { WhatsAppMockup } from "@/components/mockups/WhatsAppMockup";
import type { ModuleId } from "@/data/modules";

/** Which product mockup illustrates each module on the features page. */
export const moduleMockups: Record<ModuleId, ReactNode> = {
  "quote-to-order": <QuoteBuilderMockup />,
  bom: <BomTreeMockup />,
  pipeline: (
    <AppWindow
      title="app.kanchanflow.com/pipeline"
      label="Two stages of the KanchanFlow sales pipeline, quoted and in negotiation, with deal cards showing customer, part, value and the next follow-up."
    >
      <PipelineBoard layout="compact" />
    </AppWindow>
  ),
  whatsapp: <WhatsAppMockup />,
  reports: <ReportsMockup />,
  "mobile-app": <MobileAppMockup />,
};
