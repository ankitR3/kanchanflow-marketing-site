export type CostLine = {
  label: string;
  basis: string;
  amount: string;
};

export const quoteSummary = {
  id: "Q-2417",
  customer: "Pune Hydraulics Pvt. Ltd.",
  part: "Cylinder end cap · EN8 · Dwg PH-2231 rev C",
  quantity: "2,500 pcs",
  unitPrice: "₹296.00",
  total: "₹7,40,000",
  unitCost: "₹229.30",
  margin: "22.5%",
};

export const quoteCostLines: CostLine[] = [
  { label: "Material", basis: "EN8 Ø75 bar · 0.62 kg @ ₹96/kg", amount: "₹59.52" },
  { label: "CNC turning", basis: "0.12 hr @ ₹950/hr", amount: "₹114.00" },
  { label: "Drilling & tapping", basis: "0.05 hr @ ₹600/hr", amount: "₹30.00" },
  { label: "Zinc plating", basis: "Job work · per piece", amount: "₹8.50" },
  { label: "Overheads", basis: "12% of machining", amount: "₹17.28" },
];
