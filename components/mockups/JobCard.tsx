import { Stamp } from "@/components/drawing/Stamp";
import { jobCard } from "@/data/mockups/job-card";

/**
 * A printed job card, the paper document every shop floor runs on,
 * stamped APPROVED. The hero's one animated moment.
 */
export function JobCard() {
  return (
    <div
      role="img"
      aria-label={`Job card for quote ${jobCard.number}: 2,500 cylinder end caps for Pune Hydraulics at ₹296 each, stamped approved, with work order ${jobCard.workOrder} released.`}
      className="relative mx-auto w-full max-w-md"
    >
      {/* A second card underneath, so it reads as a stack of paper. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-1.5 translate-y-2 rotate-2 border border-line-strong bg-surface-raised sm:translate-x-3 sm:translate-y-3"
      />

      <div className="relative -rotate-1 border border-line-strong bg-surface-raised text-ink shadow-[0_18px_40px_-24px_rgb(21_23_26/0.5)]">
        {/* Punched hole and perforated tear-off edge */}
        <div className="flex items-center justify-between border-b border-dashed border-line-strong px-4 py-2">
          <span className="font-mono text-label text-ink-muted uppercase">
            Job card
          </span>
          <span className="h-3 w-3 rounded-full border border-line-strong bg-surface" />
          <span className="font-mono text-label font-medium">{jobCard.number}</span>
        </div>

        <dl className="divide-y divide-line">
          {jobCard.fields.map((field) => (
            <div
              key={field.label}
              className="grid grid-cols-[6.5rem_1fr] gap-3 px-4 py-2.5 text-sm"
            >
              <dt className="font-mono text-label text-ink-muted uppercase">
                {field.label}
              </dt>
              <dd className="font-medium">{field.value}</dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-line-strong bg-surface px-4 py-3">
          <p className="font-mono text-label text-ink-muted">{jobCard.approval}</p>
          <p className="mt-1 text-sm font-semibold">
            Work order <span className="marker">{jobCard.workOrder}</span> released
            to the plant
          </p>
        </div>

        {/* Sits over the quantity and price rows, whose values are short. */}
        <Stamp animated className="absolute top-[9.25rem] right-5 bg-surface-raised/80 text-sm">
          Approved
        </Stamp>
      </div>
    </div>
  );
}
