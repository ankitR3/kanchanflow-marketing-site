import { GitBranch } from "lucide-react";
import { cn } from "@/lib/cn";
import { bomNodes, type BomNode } from "@/data/mockups/bom";
import { AppWindow } from "./AppWindow";

const sourceClasses: Record<BomNode["source"], string> = {
  Make: "bg-graphite-950 text-steel-50",
  Buy: "bg-steel-200 text-graphite-800",
  "Job work": "bg-gold-200 text-graphite-900",
};

// Indentation per BOM level; full class names so Tailwind can see them.
const depthIndent = ["", "pl-4", "pl-8"];

export function BomTreeMockup() {
  return (
    <AppWindow
      title="app.kanchanflow.com/boms/HC-63-400"
      label="A multi-level bill of materials for a hydraulic cylinder assembly, showing made, bought and job-work parts with quantities and costs, at revision C."
    >
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-bold">Hydraulic cylinder 63 × 400</p>
          <span className="flex items-center gap-1.5 rounded-sm bg-steel-100 px-2 py-1 font-mono text-[11px] text-graphite-700">
            <GitBranch aria-hidden="true" className="h-3 w-3" />
            Rev C · 2 days ago
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-steel-200 pb-1.5 font-mono text-[10px] text-graphite-500 uppercase sm:grid-cols-[1fr_3.5rem_4.5rem_4rem]">
          <span>Item</span>
          <span className="hidden sm:block">Qty</span>
          <span>Source</span>
          <span className="text-right">Cost</span>
        </div>

        <div className="divide-y divide-steel-100">
          {bomNodes.map((node) => (
            <div
              key={node.code}
              className={cn(
                "grid grid-cols-[1fr_auto_auto] items-center gap-x-3 py-1.5 text-[12px] sm:grid-cols-[1fr_3.5rem_4.5rem_4rem]",
                node.depth === 0 && "font-semibold",
              )}
            >
              <span className={cn("min-w-0", depthIndent[node.depth])}>
                <span className="block truncate">
                  {node.depth > 0 && (
                    <span aria-hidden="true" className="mr-1 text-steel-400">
                      └
                    </span>
                  )}
                  {node.name}
                </span>
                <span className="block font-mono text-[10px] font-normal text-graphite-500">
                  {node.code}
                </span>
              </span>
              <span className="hidden font-mono sm:block">{node.quantity}</span>
              <span
                className={cn(
                  "justify-self-start rounded-sm px-1.5 py-0.5 text-[10px] font-medium",
                  sourceClasses[node.source],
                )}
              >
                {node.source}
              </span>
              <span className="text-right font-mono">{node.cost}</span>
            </div>
          ))}
        </div>

        <p className="mt-3 rounded-sm border border-gold-500/60 bg-gold-200/40 px-3 py-2 text-[11px] text-graphite-800">
          3 open quotes use this BOM and were re-costed after the rev C change.
        </p>
      </div>
    </AppWindow>
  );
}
