import { cn } from "@/lib/cn";
import { reportKpis, winRateByLine } from "@/data/mockups/reports";
import { AppWindow } from "./AppWindow";

export function ReportsMockup() {
  return (
    <AppWindow
      title="app.kanchanflow.com/reports/sales"
      label="A KanchanFlow sales dashboard: quote turnaround of 1.6 days, a 41% win rate and 22.4% average margin, plus win rate by product line from 52% for assemblies down to 29% for castings."
    >
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {reportKpis.map((kpi) => (
            <div key={kpi.label} className="rounded-sm border border-steel-200 p-2.5">
              <p className="text-[10px] text-graphite-500 sm:text-[11px]">
                {kpi.label}
              </p>
              <p className="mt-1 font-mono text-sm font-medium sm:text-lg">
                {kpi.value}
              </p>
              <p className="mt-0.5 text-[10px] text-success-600">{kpi.change}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-sm border border-steel-200 p-3">
          <p className="mb-3 text-[12px] font-bold">Win rate by product line · Q3</p>
          <div className="flex flex-col gap-2.5">
            {winRateByLine.map((bar, index) => (
              <div
                key={bar.label}
                className="grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-2 text-[11px]"
              >
                <span className="text-graphite-600">{bar.label}</span>
                <span className="h-3 bg-steel-100">
                  {/* The best-performing line is highlighted in gold. */}
                  <span
                    className={cn(
                      "block h-full",
                      index === 0 ? "bg-gold-500" : "bg-graphite-950",
                    )}
                    style={{ width: `${bar.value}%` }}
                  />
                </span>
                <span className="text-right font-mono">{bar.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
