export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const primaryNav: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const primaryCta: NavLink = {
  label: "Start free trial",
  href: "/pricing#plans",
};

export const salesEmail = "sales@kanchanflow.com";

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "All features", href: "/features" },
      { label: "Quote-to-order", href: "/features#quote-to-order" },
      { label: "WhatsApp integration", href: "/features#whatsapp" },
      { label: "Mobile app", href: "/features#mobile-app" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "Plans and pricing", href: "/pricing" },
      { label: "KanchanFlow vs spreadsheets", href: "/features#compare" },
      { label: "Industries we serve", href: "/#industries" },
      { label: "Pricing FAQ", href: "/pricing#pricing-faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Talk to sales", href: `mailto:${salesEmail}` },
      { label: "Customer support", href: "mailto:support@kanchanflow.com" },
      { label: "Careers", href: "mailto:careers@kanchanflow.com" },
      { label: "Call +91 20 4855 0192", href: "tel:+912048550192" },
    ],
  },
];
