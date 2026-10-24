import { quoteCostLines, quoteSummary } from "@/data/mockups/quote";
import { AppWindow } from "./AppWindow";

export function QuoteBuilderMockup() {
  return (
    <AppWindow
      title={`app.kanchanflow.com/quotes/${quoteSummary.id}`}
      label="A KanchanFlow quote for 2,500 cylinder end caps, with cost lines for material, CNC turning, drilling, plating and overheads adding up to a unit price of ₹296 at a 22.5% margin."
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-steel-200 pb-4">
          <div>
            <p className="font-mono text-[11px] text-graphite-500">
              {quoteSummary.id} · Draft
            </p>
            <p className="text-sm font-bold">{quoteSummary.customer}</p>
            <p className="text-[12px] text-graphite-600">{quoteSummary.part}</p>
          </div>
          <span className="rounded-sm bg-steel-100 px-2 py-1 font-mono text-[11px] text-graphite-700">
            Qty {quoteSummary.quantity}
          </span>
        </div>

        <div className="divide-y divide-steel-200 text-[12px]">
          {quoteCostLines.map((line) => (
            <div
              key={line.label}
              className="grid grid-cols-[1fr_auto] gap-x-4 py-2 sm:grid-cols-[8rem_1fr_auto]"
            >
              <span className="font-semibold">{line.label}</span>
              <span className="col-start-1 row-start-2 text-graphite-500 sm:col-start-2 sm:row-start-1">
                {line.basis}
              </span>
              <span className="row-span-2 self-center text-right font-mono sm:row-span-1">
                {line.amount}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-end justify-between gap-3 rounded-sm bg-graphite-950 p-3 text-steel-50">
          <div className="text-[11px] text-steel-50/75">
            Unit cost <span className="font-mono">{quoteSummary.unitCost}</span>{" "}
            · Margin{" "}
            <span className="font-mono text-gold-300">{quoteSummary.margin}</span>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-steel-50/75">Unit price</p>
            <p className="font-mono text-lg font-medium text-gold-300">
              {quoteSummary.unitPrice}
            </p>
          </div>
        </div>

        <div className="mt-3 flex justify-end gap-2 text-[12px] font-semibold">
          <span className="rounded-sm border border-steel-300 px-3 py-1.5">
            Send on WhatsApp
          </span>
          <span className="rounded-sm bg-gold-500 px-3 py-1.5 text-graphite-950">
            Convert to order
          </span>
        </div>
      </div>
    </AppWindow>
  );
}
