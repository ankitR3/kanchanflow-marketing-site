export type ReportKpi = {
  label: string;
  value: string;
  change: string;
};

export type WinRateBar = {
  label: string;
  /** Percentage, 0–100. */
  value: number;
};

export const reportKpis: ReportKpi[] = [
  { label: "Quote turnaround", value: "1.6 days", change: "−38% vs Q2" },
  { label: "Win rate", value: "41%", change: "+6 pts vs Q2" },
  { label: "Avg. margin", value: "22.4%", change: "+1.8 pts vs Q2" },
];

export const winRateByLine: WinRateBar[] = [
  { label: "Assemblies", value: 52 },
  { label: "Machined parts", value: 46 },
  { label: "Fabrication", value: 38 },
  { label: "Castings", value: 29 },
];
