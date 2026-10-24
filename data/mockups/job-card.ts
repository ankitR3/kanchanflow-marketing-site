export type JobCardField = {
  label: string;
  value: string;
};

export const jobCard = {
  number: "Q-2417",
  workOrder: "WO-0912",
  approval: "Approved on WhatsApp · 11:20, 14 Oct",
  fields: [
    { label: "Customer", value: "Pune Hydraulics Pvt. Ltd." },
    { label: "Part", value: "Cylinder end cap, EN8" },
    { label: "Drawing", value: "PH-2231 rev C" },
    { label: "Quantity", value: "2,500 pcs" },
    { label: "Unit price", value: "₹296.00" },
    { label: "Delivery", value: "1,000 in 2 wks, rest in 3" },
  ] satisfies JobCardField[],
};
