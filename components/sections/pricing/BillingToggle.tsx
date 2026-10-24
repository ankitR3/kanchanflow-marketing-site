import { cn } from "@/lib/cn";
import { annualDiscountLabel, type BillingCycle } from "@/data/pricing-plans";

type BillingToggleProps = {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
};

const options: { value: BillingCycle; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual" },
];

/**
 * A segmented control built on native radio inputs, so arrow keys,
 * focus and screen reader announcements work without extra code.
 */
export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <fieldset className="flex flex-col items-center gap-3">
      <legend className="sr-only">Billing cycle</legend>
      <div className="inline-flex rounded-sm border border-line bg-surface-raised p-1">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "relative flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition-colors duration-150",
              "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-500",
              value === option.value
                ? "bg-ink text-surface"
                : "text-ink-muted hover:text-ink",
            )}
          >
            <input
              type="radio"
              name="billing-cycle"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
            {option.value === "annual" && (
              <span
                className={cn(
                  "rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium",
                  value === "annual"
                    ? "bg-gold-500 text-graphite-950"
                    : "bg-gold-200 text-graphite-900",
                )}
              >
                {annualDiscountLabel}
              </span>
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
