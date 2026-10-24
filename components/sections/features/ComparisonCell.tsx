import { Check, Minus } from "lucide-react";
import type { ComparisonValue } from "@/data/features/comparison";

type ComparisonCellProps = {
  value: ComparisonValue;
};

/** Renders a comparison value as an icon (with screen reader text) or a short note. */
export function ComparisonCell({ value }: ComparisonCellProps) {
  if (value === true) {
    return (
      <>
        <Check aria-hidden="true" className="mx-auto h-5 w-5" />
        <span className="sr-only">Included</span>
      </>
    );
  }

  if (value === false) {
    return (
      <>
        <Minus aria-hidden="true" className="mx-auto h-5 w-5 opacity-50" />
        <span className="sr-only">Not available</span>
      </>
    );
  }

  return <span className="text-sm">{value}</span>;
}
