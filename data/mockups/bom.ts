export type BomNode = {
  code: string;
  name: string;
  quantity: string;
  source: "Make" | "Buy" | "Job work";
  cost: string;
  depth: number;
};

// Flattened tree: depth controls indentation in the mockup.
export const bomNodes: BomNode[] = [
  { code: "HC-63-400", name: "Hydraulic cylinder assy", quantity: "1", source: "Make", cost: "₹4,310", depth: 0 },
  { code: "BT-63", name: "Barrel tube, ST52 honed", quantity: "1", source: "Buy", cost: "₹1,420", depth: 1 },
  { code: "PR-36", name: "Piston rod, EN8 chromed", quantity: "1", source: "Make", cost: "₹1,180", depth: 1 },
  { code: "RM-EN8-40", name: "EN8 bar Ø40", quantity: "2.1 kg", source: "Buy", cost: "₹202", depth: 2 },
  { code: "HCP-PR", name: "Hard chrome plating", quantity: "1", source: "Job work", cost: "₹310", depth: 2 },
  { code: "EC-63", name: "End cap, EN8", quantity: "2", source: "Make", cost: "₹592", depth: 1 },
  { code: "SK-63", name: "Seal kit, NBR", quantity: "1", source: "Buy", cost: "₹640", depth: 1 },
];
