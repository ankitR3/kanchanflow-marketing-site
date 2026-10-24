import type { Deal } from "@/data/mockups/pipeline";

type DealCardProps = {
  deal: Deal;
};

export function DealCard({ deal }: DealCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-sm border border-steel-200 bg-white p-2.5 shadow-[0_1px_2px_rgb(17_19_22/0.06)]">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-graphite-500">{deal.id}</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-steel-200 text-[9px] font-semibold text-graphite-700">
          {deal.owner}
        </span>
      </div>
      <div>
        <p className="text-[12px] leading-tight font-semibold">{deal.customer}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-graphite-600">
          {deal.item}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1">
        <span className="font-mono text-[12px] font-medium">{deal.value}</span>
        {deal.workOrder && (
          <span className="rounded-sm bg-graphite-950 px-1.5 py-0.5 font-mono text-[10px] text-gold-300">
            {deal.workOrder}
          </span>
        )}
        {deal.note && (
          <span className="rounded-sm bg-gold-200 px-1.5 py-0.5 text-[10px] font-medium text-graphite-900">
            {deal.note}
          </span>
        )}
      </div>
    </div>
  );
}
