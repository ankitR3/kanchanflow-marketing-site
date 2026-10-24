export type BillingCycle = "monthly" | "annual";

export type PricingPlan = {
  id: string;
  name: string;
  audience: string;
  /** Price per user per month, in rupees. null means custom pricing. */
  price: Record<BillingCycle, number> | null;
  userLimit: string;
  featuresIntro: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export const annualDiscountLabel = "Save 20%";

export const pricingPlans: PricingPlan[] = [
  {
    id: "workshop",
    name: "Workshop",
    audience: "For job shops moving off spreadsheets and WhatsApp.",
    price: { monthly: 999, annual: 799 },
    userLimit: "3 to 10 users",
    featuresIntro: "What's included:",
    features: [
      "Quotes, sales orders and customer records",
      "Sales pipeline with follow-up reminders",
      "Single-level BOMs",
      "Share quotes on WhatsApp",
      "Android and iOS app",
      "Email support, next business day",
    ],
    cta: { label: "Start free trial", href: "mailto:sales@kanchanflow.com?subject=Workshop%20trial" },
  },
  {
    id: "factory",
    name: "Factory",
    audience: "For plants running quote-to-order end to end.",
    price: { monthly: 1899, annual: 1499 },
    userLimit: "Up to 100 users",
    featuresIntro: "Everything in Workshop, plus:",
    features: [
      "Multi-level BOMs with revision control",
      "Costing templates and margin floors",
      "Quote to work order conversion",
      "WhatsApp approvals and dispatch updates",
      "Two-way sync with Tally Prime",
      "Custom reports and scheduled PDFs",
    ],
    cta: { label: "Start free trial", href: "mailto:sales@kanchanflow.com?subject=Factory%20trial" },
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "For multi-plant groups with ERP and compliance needs.",
    price: null,
    userLimit: "Unlimited users and plants",
    featuresIntro: "Everything in Factory, plus:",
    features: [
      "Multiple plants, currencies and price lists",
      "SAP Business One and custom ERP integration",
      "Single sign-on and audit logs",
      "A named customer success engineer",
      "99.9% uptime SLA",
      "On-site onboarding at your plant",
    ],
    cta: { label: "Talk to sales", href: "mailto:sales@kanchanflow.com?subject=Enterprise%20enquiry" },
  },
];

/** The "Notes" block under the plan cards, as on a drawing. */
export const planNotes: string[] = [
  "All prices are per user per month, in Indian rupees, excluding 18% GST.",
  "Every plan includes guided onboarding and import of your Excel customer, item and BOM sheets.",
  "Supervisors and operators who only view order status are free read-only users, with no limit.",
  "Data is hosted in India (AWS Mumbai) and encrypted in transit and at rest.",
  "No setup fee, no implementation partner, and you can cancel a monthly plan at any time.",
];
