import { Check } from "lucide-react";
import { Stamp } from "@/components/drawing/Stamp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { BillingCycle, PricingPlan } from "@/data/pricing-plans";
import { PlanPrice } from "./PlanPrice";

type PricingCardProps = {
  plan: PricingPlan;
  index: number;
  cycle: BillingCycle;
};

/** A plan laid out like a spec sheet: code, title, price, then ruled specs. */
export function PricingCard({ plan, index, cycle }: PricingCardProps) {
  const highlighted = plan.highlighted ?? false;
  const headingId = `plan-${plan.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "relative flex flex-col bg-surface-raised",
        highlighted
          ? "border-2 border-line-strong shadow-[0_24px_50px_-30px_rgb(21_23_26/0.5)]"
          : "border border-line-strong",
      )}
    >
      {highlighted && <span aria-hidden="true" className="h-1.5 bg-gold-500" />}
      <div className="flex items-center justify-between border-b border-line-strong px-6 py-2.5">
        <span className="font-mono text-label text-ink-muted uppercase">
          Plan {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-label text-ink-muted uppercase">
          {plan.userLimit}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-7 p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id={headingId} className="text-h2">
              {plan.name}
            </h2>
            {highlighted && <Stamp className="text-xs">Most popular</Stamp>}
          </div>
          <p className="mt-2 text-ink-muted">{plan.audience}</p>
        </div>

        <PlanPrice price={plan.price} cycle={cycle} />

        <Button
          href={plan.cta.href}
          variant={highlighted ? "primary" : "outline"}
          size="lg"
          className="w-full"
        >
          {plan.cta.label}
          <span className="sr-only"> on the {plan.name} plan</span>
        </Button>

        <div>
          <p className="font-mono text-label text-ink-muted uppercase">
            {plan.featuresIntro}
          </p>
          <ul className="mt-3 border-t border-line">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 border-b border-line py-2.5 text-sm"
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
