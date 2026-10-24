export type PainPoint = {
  area: string;
  problem: string;
  solution: string;
};

export const painPoints: PainPoint[] = [
  {
    area: "Quoting",
    problem:
      "Rebuilt in Excel for every RFQ. The price depends on who does it that day.",
    solution:
      "Costed from the BOM using your material, machine-hour and overhead rates.",
  },
  {
    area: "Approvals",
    problem:
      "Sit in one salesperson's WhatsApp, where nobody else can see them.",
    solution:
      "Logged against the quote automatically, visible to the whole team.",
  },
  {
    area: "Order handover",
    problem:
      "Won orders are re-typed into production sheets, and quantities get missed.",
    solution:
      "One click turns the approved quote into a work order with the exact BOM.",
  },
  {
    area: "Order status",
    problem:
      "\"Where's my order?\" means a phone call and a walk across the floor.",
    solution:
      "Live status that sales, the plant and the customer all see the same way.",
  },
];
