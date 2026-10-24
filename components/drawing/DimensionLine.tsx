import { cn } from "@/lib/cn";

type DimensionLineProps = {
  /** Label written above the line, like a measured dimension. */
  measure: string;
  steps: string[];
  className?: string;
};

/**
 * A drawing-style dimension line (arrow to arrow, with tick marks)
 * used to show a process from start to finish.
 */
export function DimensionLine({ measure, steps, className }: DimensionLineProps) {
  return (
    <div className={cn("w-full", className)}>
      <p className="text-center font-mono text-label text-ink-muted uppercase">
        {measure}
      </p>
      <div aria-hidden="true" className="relative mt-2 h-3">
        <span className="absolute inset-x-0 top-1/2 h-px origin-left bg-line-strong motion-safe:animate-[draw-line_900ms_var(--ease-out-quart)_both]" />
        <span className="absolute top-1/2 left-0 h-0 w-0 -translate-y-1/2 border-y-[5px] border-r-[9px] border-y-transparent border-r-line-strong" />
        <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 border-y-[5px] border-l-[9px] border-y-transparent border-l-line-strong" />
      </div>
      <ol
        className="mt-1 grid"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((step, index) => (
          <li
            key={step}
            className="relative flex flex-col items-center gap-1.5 text-center"
          >
            <span aria-hidden="true" className="h-2.5 w-px bg-line-strong" />
            <span className="font-mono text-[11px] leading-tight sm:text-xs">
              <span className="sr-only">Step {index + 1}: </span>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
