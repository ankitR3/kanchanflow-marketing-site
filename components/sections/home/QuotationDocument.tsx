import { Stamp } from "@/components/drawing/Stamp";
import { formatRupees } from "@/lib/format";
import { pricingPlans } from "@/data/pricing-plans";
import { quotationExtras, quotationMeta } from "@/data/home/quotation";

/** KanchanFlow's own prices, set out as the kind of quote it helps you send. */
export function QuotationDocument() {
  return (
    <div className="relative border border-line-strong bg-surface-raised p-5 sm:p-8">
      <div className="flex flex-col justify-between gap-4 border-b-2 border-line-strong pb-5 sm:flex-row sm:items-end">
        <p className="font-display text-3xl font-extrabold tracking-tight [font-stretch:112%]">
          Quotation
        </p>
        <dl className="grid grid-cols-3 gap-4 sm:gap-6">
          {quotationMeta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-label text-ink-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-0.5 font-mono text-sm">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <table className="mt-2 w-full border-collapse text-left">
        <caption className="sr-only">
          KanchanFlow plan rates per user per month on annual billing
        </caption>
        <thead>
          <tr className="border-b border-line font-mono text-label text-ink-muted uppercase">
            <th scope="col" className="w-10 py-3 font-normal">#</th>
            <th scope="col" className="py-3 font-normal">Description</th>
            <th scope="col" className="py-3 text-right font-normal">Rate</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((plan, index) => (
            <tr key={plan.id} className="border-b border-line">
              <td className="py-4 align-top font-mono text-sm text-ink-muted">
                {index + 1}
              </td>
              <th scope="row" className="py-4 pr-4 align-top font-normal">
                <span className="font-semibold">{plan.name} plan</span>
                <span className="block text-sm text-ink-muted">{plan.audience}</span>
              </th>
              <td className="py-4 text-right align-top whitespace-nowrap">
                {plan.price ? (
                  <>
                    <span className="font-mono font-medium">
                      {formatRupees(plan.price.annual)}
                    </span>
                    <span className="block text-xs text-ink-muted">/ user / month</span>
                  </>
                ) : (
                  <span className="font-mono font-medium">On request</span>
                )}
              </td>
            </tr>
          ))}
          {quotationExtras.map((extra, index) => (
            <tr key={extra} className="border-b border-line">
              <td className="py-3 font-mono text-sm text-ink-muted">
                {pricingPlans.length + index + 1}
              </td>
              <th scope="row" className="py-3 pr-4 font-normal">
                {extra}
              </th>
              <td className="py-3 text-right font-mono font-medium">₹0</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-5 max-w-xs text-sm text-ink-muted">
        Rates billed annually and exclusive of 18% GST. Monthly billing costs
        25% more.
      </p>
      <Stamp className="absolute right-5 bottom-6 text-sm sm:right-8">14-day trial</Stamp>
    </div>
  );
}
