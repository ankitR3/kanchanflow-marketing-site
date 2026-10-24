import { cn } from "@/lib/cn";
import type { PipelineStage } from "@/data/mockups/pipeline";
import { DealCard } from "./DealCard";

type PipelineColumnProps = {
  stage: PipelineStage;
  className?: string;
};

export function PipelineColumn({ stage, className }: PipelineColumnProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2 rounded-sm bg-steel-100 p-2", className)}>
      <div className="flex items-baseline justify-between gap-2 px-0.5">
        <span className="truncate text-[11px] font-semibold tracking-wide uppercase">
          {stage.name}
          <span className="ml-1.5 font-normal text-graphite-500">
            {stage.deals.length}
          </span>
        </span>
        <span className="font-mono text-[11px] text-graphite-600">
          {stage.total}
        </span>
      </div>
      {stage.deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
