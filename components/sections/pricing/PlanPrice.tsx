import type { BillingCycle, PricingPlan } from "@/data/pricing-plans";
import { formatRupees } from "@/lib/format";

type PlanPriceProps = {
  price: PricingPlan["price"];
  cycle: BillingCycle;
};

export function PlanPrice({ price, cycle }: PlanPriceProps) {
  if (!price) {
    return (
      <div>
        <p className="font-display text-5xl font-extrabold [font-stretch:112%]">
          Custom
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Volume pricing based on users and plants
        </p>
      </div>
    );
  }

  const perMonth = price[cycle];

  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-1.5">
        <span className="font-display text-5xl font-extrabold [font-stretch:112%]">
          {formatRupees(perMonth)}
        </span>
        <span className="text-sm whitespace-nowrap text-ink-muted">
          / user / month
        </span>
      </p>
      <p className="mt-2 text-sm text-ink-muted">
        {cycle === "annual"
          ? `Billed yearly at ${formatRupees(perMonth * 12)} per user`
          : `Billed monthly. ${formatRupees(price.annual)} on annual billing`}
      </p>
    </div>
  );
}
