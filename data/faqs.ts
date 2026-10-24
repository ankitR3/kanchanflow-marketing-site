export type Faq = {
  question: string;
  answer: string;
};

export const homeFaqs: Faq[] = [
  {
    question: "How long does it take to get started?",
    answer:
      "Most plants send their first quote from KanchanFlow within a week. We import your customer list, item master and existing BOMs from Excel, and an onboarding engineer sets up your costing rules with you over two video calls.",
  },
  {
    question: "Can we keep using Tally or our ERP for accounting?",
    answer:
      "Yes. KanchanFlow covers everything from enquiry to sales order and work order. Approved orders sync to Tally Prime on the Factory plan, and Enterprise customers can connect SAP Business One or a custom ERP through our API.",
  },
  {
    question: "Does the WhatsApp integration need a separate number?",
    answer:
      "It runs on the official WhatsApp Business Platform, so you'll need a verified business number. We register it with you during onboarding. Meta's per-message charges are passed through at cost, with no markup.",
  },
  {
    question: "Who can see our costing and margins?",
    answer:
      "Only the people you allow. Role-based access lets you hide material rates, machine-hour costs and margins from users who only need to see order status. Data is encrypted in transit and at rest, and hosted in India.",
  },
  {
    question: "Does it work for job work and make-to-order?",
    answer:
      "That's what it's built for. You can quote parts you've never made before from a drawing, quote job work where the customer supplies the material, and keep repeat-order pricing for regular parts in the same system.",
  },
  {
    question: "What happens after the 14-day free trial?",
    answer:
      "You choose a plan and keep everything you've set up. If you decide not to continue, we keep your data for 30 days so you can export it as Excel files. We don't ask for a card to start the trial.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    question: "Who counts as a user?",
    answer:
      "Anyone who creates or edits quotes, orders or BOMs. Supervisors and shop-floor staff who only view order status are free read-only users on every plan, with no limit.",
  },
  {
    question: "Is there a minimum number of users?",
    answer:
      "The Workshop plan starts at 3 users. Factory and Enterprise have no minimum, but most plants on Factory start with 5 to 15 users across sales, estimation and planning.",
  },
  {
    question: "Can we switch between monthly and annual billing?",
    answer:
      "Yes. You can move from monthly to annual at any time and we'll credit the unused part of your month. Moving from annual to monthly takes effect at your next renewal.",
  },
  {
    question: "Do you charge for onboarding or data migration?",
    answer:
      "No. Guided onboarding, Excel imports of customers, items and BOMs, and costing setup are included on every plan. On-site onboarding at your plant is included with Enterprise.",
  },
  {
    question: "Do the prices include GST?",
    answer:
      "Prices are shown per user per month and exclude 18% GST. You'll get a GST invoice with your company's GSTIN, so you can claim input tax credit.",
  },
  {
    question: "How can we pay?",
    answer:
      "Monthly plans are paid by card or UPI AutoPay. Annual plans can also be paid by NEFT or RTGS against a proforma invoice, with 15-day payment terms for registered companies.",
  },
];
