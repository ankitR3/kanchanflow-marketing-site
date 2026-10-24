import { planNotes } from "@/data/pricing-plans";

/** Plan-wide terms, set out like the numbered notes on a drawing. */
export function PlanNotes() {
  return (
    <div className="mt-16 grid gap-4 border-t-2 border-line-strong pt-6 md:grid-cols-12">
      <h2 className="font-mono text-label font-medium uppercase md:col-span-3">
        Notes
      </h2>
      <ol className="flex flex-col gap-3 md:col-span-9">
        {planNotes.map((note, index) => (
          <li key={note} className="flex gap-4 text-ink-muted">
            <span className="w-5 shrink-0 font-mono text-sm text-ink">
              {index + 1}.
            </span>
            {note}
          </li>
        ))}
      </ol>
    </div>
  );
}
