export type TourCallout = {
  number: number;
  title: string;
  text: string;
};

export const tourCallouts: TourCallout[] = [
  {
    number: 1,
    title: "RFQs land in one column",
    text: "Enquiries from email, WhatsApp and the field app arrive here with the drawing attached, so none sit in someone's inbox.",
  },
  {
    number: 2,
    title: "The next action is on the card",
    text: "Each quote shows who owns it and when it needs chasing. Overdue follow-ups turn gold before the customer goes cold.",
  },
  {
    number: 3,
    title: "Won deals carry their work order",
    text: "Approve a quote and it moves to Won with a work order number already raised for the plant.",
  },
];
