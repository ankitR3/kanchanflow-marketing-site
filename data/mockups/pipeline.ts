export type Deal = {
  id: string;
  customer: string;
  item: string;
  value: string;
  owner: string;
  note?: string;
  workOrder?: string;
};

export type PipelineStage = {
  name: string;
  total: string;
  deals: Deal[];
};

export const pipelineStages: PipelineStage[] = [
  {
    name: "RFQ received",
    total: "₹18.4L",
    deals: [
      {
        id: "RFQ-1188",
        customer: "Shree Auto Comp",
        item: "M8 mounting bracket × 4,000",
        value: "₹6.2L",
        owner: "AP",
      },
      {
        id: "RFQ-1191",
        customer: "Deccan Pumps",
        item: "Impeller housing, CI × 600",
        value: "₹4.8L",
        owner: "RK",
        note: "Drawing rev B",
      },
    ],
  },
  {
    name: "Quoted",
    total: "₹12.7L",
    deals: [
      {
        id: "Q-2409",
        customer: "Vardhman Switchgear",
        item: "MS enclosure 600×400 × 250",
        value: "₹9.1L",
        owner: "SN",
        note: "Follow up today",
      },
      {
        id: "Q-2414",
        customer: "Nashik Agro Implements",
        item: "Tine assembly × 1,200",
        value: "₹3.6L",
        owner: "RK",
      },
    ],
  },
  {
    name: "Negotiation",
    total: "₹5.3L",
    deals: [
      {
        id: "Q-2411",
        customer: "Satara Castings",
        item: "Gearbox cover, SG iron × 800",
        value: "₹5.3L",
        owner: "AP",
        note: "Target ₹5.0L",
      },
    ],
  },
  {
    name: "Won",
    total: "₹20.0L",
    deals: [
      {
        id: "Q-2417",
        customer: "Pune Hydraulics",
        item: "Cylinder end cap, EN8 × 2,500",
        value: "₹7.4L",
        owner: "SN",
        workOrder: "WO-0912",
      },
      {
        id: "Q-2398",
        customer: "Aurangabad Auto",
        item: "Brake pedal arm × 10,000",
        value: "₹12.6L",
        owner: "AP",
        workOrder: "WO-0907",
      },
    ],
  },
];
