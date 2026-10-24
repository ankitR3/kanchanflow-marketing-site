import { Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { pipelineStages } from "@/data/mockups/pipeline";
import { MockupSidebar } from "./MockupSidebar";
import { PipelineColumn } from "./PipelineColumn";

type PipelineBoardProps = {
  /** "full" shows the sidebar and all four stages on large screens. */
  layout?: "full" | "compact";
};

// In the full layout, later stages appear as the viewport widens.
const fullColumnVisibility = ["", "", "hidden sm:flex", "hidden lg:flex"];

export function PipelineBoard({ layout = "full" }: PipelineBoardProps) {
  const isFull = layout === "full";
  const stages = isFull ? pipelineStages : pipelineStages.slice(1, 3);

  return (
    <div className="flex">
      {isFull && <MockupSidebar />}
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-bold">Sales pipeline</p>
            <p className="text-[11px] text-graphite-500">
              October · Open value <span className="font-mono">₹36.4L</span> ·
              Win rate <span className="font-mono">41%</span>
            </p>
          </div>
          {isFull && (
            <div className="hidden items-center gap-1.5 rounded-sm border border-steel-200 px-2 py-1 text-[11px] text-graphite-500 sm:flex">
              <Search aria-hidden="true" className="h-3 w-3" />
              Search quotes, parts, customers
            </div>
          )}
        </div>
        <div
          className={cn(
            "grid items-start gap-2",
            isFull ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-2",
          )}
        >
          {stages.map((stage, index) => (
            <PipelineColumn
              key={stage.name}
              stage={stage}
              className={isFull ? fullColumnVisibility[index] : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
