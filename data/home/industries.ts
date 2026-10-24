export type Industry = {
  name: string;
  detail: string;
  image: {
    src: string;
    alt: string;
  };
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

export const industries: Industry[] = [
  {
    name: "Precision machining",
    detail: "CNC turning and milling, job-work and repeat orders",
    image: {
      src: unsplash("1666634157070-6fd830fb5672"),
      alt: "A metal rod held in a lathe chuck being machined by a cutting tool",
    },
  },
  {
    name: "Sheet metal and fabrication",
    detail: "Enclosures, frames and structural weldments",
    image: {
      src: unsplash("1504328345606-18bbc8c9d7d1"),
      alt: "A welder joining steel with sparks flying",
    },
  },
  {
    name: "Automotive components",
    detail: "Tier 2 and tier 3 suppliers with PPAP-style quoting",
    image: {
      src: unsplash("1777383975764-bec6f5cabf00"),
      alt: "Robotic arms assembling a car chassis on a production line",
    },
  },
  {
    name: "Electrical panels and switchgear",
    detail: "Engineer-to-order panels with long bills of material",
    image: {
      src: unsplash("1544724569-5f546fd6f2b5"),
      alt: "An electrical control panel with circuit breakers and colour-coded wiring",
    },
  },
  {
    name: "Industrial machinery",
    detail: "Special-purpose machines and multi-level assemblies",
    image: {
      src: unsplash("1717386255773-1e3037c81788"),
      alt: "A large industrial machine on a factory floor",
    },
  },
  {
    name: "Laser cutting and job shops",
    detail: "High-mix, low-volume work quoted the same day",
    image: {
      src: unsplash("1764114235891-66ff86abaf87"),
      alt: "An industrial laser cutter working on a steel sheet",
    },
  },
];
