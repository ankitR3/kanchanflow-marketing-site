export type ChatMessage = {
  from: "team" | "customer";
  text: string;
  time: string;
  attachment?: string;
};

export const chatContact = {
  name: "Ajay Deshmukh",
  company: "Pune Hydraulics",
};

export const chatMessages: ChatMessage[] = [
  {
    from: "team",
    text: "Hi Ajay, sharing our quote for 2,500 cylinder end caps in EN8. ₹296 per piece, delivery in 3 weeks.",
    time: "10:42",
    attachment: "Q-2417_PuneHydraulics.pdf",
  },
  {
    from: "customer",
    text: "Price is fine. Can you send the first 1,000 pcs in 2 weeks?",
    time: "11:15",
  },
  {
    from: "team",
    text: "Yes, split dispatch confirmed. Reply APPROVE and we'll release the work order.",
    time: "11:18",
  },
  { from: "customer", text: "APPROVE", time: "11:20" },
];
