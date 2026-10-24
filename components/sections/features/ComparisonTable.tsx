import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { comparisonColumns, comparisonRows } from "@/data/features/comparison";
import { ComparisonCell } from "./ComparisonCell";

export function ComparisonTable() {
  return (
    <Section id="compare" tone="sheet" aria-labelledby="compare-heading">
      <SectionHeading
        id="compare-heading"
        title="Why manufacturers outgrow generic CRMs and spreadsheets."
        description="Generic CRMs were designed for selling subscriptions, not machined parts. Here's how KanchanFlow compares on the work a factory sales team does every day."
      />

      {/* On narrow screens the table scrolls inside its own region, never the page. */}
      <div
        role="region"
        aria-labelledby="compare-heading"
        tabIndex={0}
        // `relative` keeps the absolutely positioned sr-only labels inside the scroller.
        className="relative mt-12 overflow-x-auto border-t-2 border-line-strong"
      >
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">
            Feature comparison of KanchanFlow, a generic CRM, and Excel with
            WhatsApp
          </caption>
          <thead>
            <tr className="border-b border-line-strong">
              <th scope="col" className="py-4 pr-4 font-mono text-label font-normal text-ink-muted uppercase">
                Capability
              </th>
              {comparisonColumns.map((column, index) => (
                <th
                  key={column}
                  scope="col"
                  className={cn(
                    "w-40 px-4 py-4 text-center text-sm font-bold",
                    index === 0 && "bg-highlight/40",
                  )}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.capability} className="border-b border-line">
                <th scope="row" className="py-4 pr-4 font-medium">
                  {row.capability}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={comparisonColumns[index]}
                    className={cn(
                      "px-4 py-4 text-center",
                      index === 0 ? "bg-highlight/40 font-semibold" : "text-ink-muted",
                    )}
                  >
                    <ComparisonCell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
