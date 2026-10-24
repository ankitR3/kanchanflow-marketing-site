import { Callout } from "@/components/drawing/Callout";
import { AppWindow } from "@/components/mockups/AppWindow";
import { PipelineBoard } from "@/components/mockups/PipelineBoard";
import { Section } from "@/components/ui/Section";
import { tourCallouts } from "@/data/home/tour-callouts";

// Balloon positions over the four-column pipeline (large screens only,
// where the mockup layout is fixed). Keyed by callout number.
const balloonPositions: Record<number, string> = {
  1: "top-[7.25rem] left-[34%]",
  2: "top-[11.6rem] left-[56%]",
  3: "top-[13.4rem] -right-3.5",
};

export function ProductTour() {
  return (
    <Section tone="sheet" aria-labelledby="tour-heading">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 id="tour-heading" className="text-h2 lg:col-span-7">
          The board your sales team opens every morning.
        </h2>
        <p className="text-lead text-ink-muted lg:col-span-5">
          Every RFQ, quote and won order on one screen, with the follow-ups
          that usually live on sticky notes.
        </p>
      </div>

      <div className="relative mt-12">
        <AppWindow
          title="app.kanchanflow.com/pipeline"
          label="KanchanFlow's sales pipeline with columns for RFQs received, quoted, negotiation and won. Each card shows the customer, part, quantity, value and owner."
        >
          <PipelineBoard />
        </AppWindow>
        {tourCallouts.map((callout) => (
          <span
            key={callout.number}
            className={`absolute hidden lg:block ${balloonPositions[callout.number]}`}
          >
            <Callout number={callout.number} variant="solid" />
          </span>
        ))}
      </div>

      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {tourCallouts.map((callout) => (
          <li key={callout.number} className="flex gap-4">
            <Callout number={callout.number} />
            <div>
              <h3 className="text-h3">{callout.title}</h3>
              <p className="mt-2 text-ink-muted">{callout.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
