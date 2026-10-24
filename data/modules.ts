import {
  ChartColumn,
  FileText,
  Layers,
  MessageCircle,
  Smartphone,
  SquareKanban,
  type LucideIcon,
} from "lucide-react";

export type ModuleId =
  | "quote-to-order"
  | "bom"
  | "pipeline"
  | "whatsapp"
  | "reports"
  | "mobile-app";

export type ProductModule = {
  id: ModuleId;
  icon: LucideIcon;
  /** Short name used on cards and in navigation. */
  name: string;
  /** One-line card description for the home page grid. */
  summary: string;
  /** Longer copy for the features page rows. */
  headline: string;
  /** Caption under the module's product figure. */
  figureCaption: string;
  description: string;
  points: string[];
};

export const productModules: ProductModule[] = [
  {
    id: "quote-to-order",
    icon: FileText,
    name: "Quote-to-order",
    summary:
      "Cost quotes from drawings using your material, machine-hour and overhead rates. Approved quotes become sales orders in one click.",
    headline: "Send a costed quote in 20 minutes, not two days.",
    figureCaption:
      "Quote builder. Cost lines roll up to a unit price, with margin checked against your floor.",
    description:
      "Pick the part, pull its BOM, and KanchanFlow prices material, machining time, finishing and overheads with the rates you already use. Set a margin floor and the quote won't go out below it without approval.",
    points: [
      "Costing templates per process: turning, fabrication, casting, assembly",
      "Quantity-break pricing and validity dates on every quote",
      "Approved quote converts to a sales order and work order with no re-typing",
    ],
  },
  {
    id: "bom",
    icon: Layers,
    name: "BOM management",
    summary:
      "Multi-level bills of material with revision control. Update a part once and every open quote that uses it is re-costed.",
    headline: "One bill of material. Every quote stays in sync.",
    figureCaption:
      "BOM tree for a hydraulic cylinder. Make, buy and job-work parts, re-costed on revision.",
    description:
      "Build multi-level BOMs for assemblies, sub-assemblies and bought-out parts. When a drawing revision changes a material or a steel price moves, the open quotes that depend on it are flagged and re-costed.",
    points: [
      "Unlimited BOM levels with make, buy and job-work items",
      "Revision history with who changed what, and when",
      "Import existing BOMs straight from Excel",
    ],
  },
  {
    id: "pipeline",
    icon: SquareKanban,
    name: "Sales pipeline",
    summary:
      "Track every RFQ from enquiry to PO on a board you define. See value by stage, salesperson and customer at a glance.",
    headline: "See every RFQ, quote and order on one board.",
    figureCaption:
      "Pipeline cards. Overdue follow-ups are flagged in gold.",
    description:
      "Drag deals from RFQ to won, and KanchanFlow keeps the follow-ups. Each card shows the part, quantity, value and the next action, so the Monday sales review takes 15 minutes instead of an hour.",
    points: [
      "Custom stages for tenders, repeat orders and new development",
      "Follow-up reminders so no quote goes quiet",
      "Pipeline value by product line, region and salesperson",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    name: "WhatsApp integration",
    summary:
      "Send quotes, reminders and dispatch updates on WhatsApp from inside the CRM. Every reply is logged against the customer.",
    headline: "Your customers already approve orders on WhatsApp.",
    figureCaption:
      "Customer approval on WhatsApp, logged against the quote automatically.",
    description:
      "Share quote PDFs, chase approvals and send dispatch updates on the WhatsApp Business Platform without leaving KanchanFlow. Replies attach to the right quote, so approvals never live only in someone's phone.",
    points: [
      "Quote PDFs and payment reminders sent from the deal",
      "Customer approvals captured and logged automatically",
      "Dispatch and delivery updates triggered by order status",
    ],
  },
  {
    id: "reports",
    icon: ChartColumn,
    name: "Reports",
    summary:
      "Win rate by product line, quote turnaround and margin per order. Live dashboards for the weekly review, with no exports.",
    headline: "Know which parts make money before you quote them again.",
    figureCaption:
      "Sales dashboard. Win rate by product line for the quarterly review.",
    description:
      "Live dashboards show quote turnaround, win rate and realised margin by customer and product line. Spot the jobs you keep winning at a loss, and the customers who ask for quotes but never order.",
    points: [
      "Quote turnaround, win rate and margin, updated in real time",
      "Salesperson scorecards and target tracking",
      "Scheduled PDF reports to directors every Monday at 9 am",
    ],
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    name: "Mobile app",
    summary:
      "Field sales teams log visits, capture RFQs with photos and check order status on Android and iOS, even offline.",
    headline: "Built for sales engineers who live on the road.",
    figureCaption:
      "Field app logging a visit offline. The RFQ syncs when signal returns.",
    description:
      "Log a customer visit, photograph a sample part and raise an RFQ from the customer's shop floor. The app works offline in industrial estates with patchy signal and syncs once you're back in range.",
    points: [
      "Offline-first: visits and RFQs sync when signal returns",
      "Photo and drawing capture attached to the RFQ",
      "Live order status to answer \"where's my order?\" on the spot",
    ],
  },
];
