/** true = included, false = not available, string = a qualified answer. */
export type ComparisonValue = boolean | string;

export type ComparisonRow = {
  capability: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue];
};

export const comparisonColumns = [
  "KanchanFlow",
  "Generic CRM",
  "Excel + WhatsApp",
] as const;

export const comparisonRows: ComparisonRow[] = [
  {
    capability: "Quotes costed from BOM and machine-hour rates",
    values: [true, false, "Manual formulas"],
  },
  {
    capability: "Multi-level BOMs with revision history",
    values: [true, false, false],
  },
  {
    capability: "Approved quote to work order in one click",
    values: [true, false, false],
  },
  {
    capability: "WhatsApp approvals logged on the deal",
    values: [true, "Paid add-on", "Stays in chats"],
  },
  {
    capability: "Sales pipeline with follow-up reminders",
    values: [true, true, false],
  },
  {
    capability: "Order status visible to sales and customers",
    values: [true, false, "Phone calls"],
  },
  {
    capability: "Mobile app that works offline",
    values: [true, "Partly", false],
  },
  {
    capability: "Typical time to go live",
    values: ["1 week", "2–3 months", "Not applicable"],
  },
];
