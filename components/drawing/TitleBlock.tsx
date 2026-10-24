import { cn } from "@/lib/cn";

export type TitleBlockCell = {
  label: string;
  value: string;
};

type TitleBlockProps = {
  cells: TitleBlockCell[];
  className?: string;
};

/**
 * The ruled box in the corner of every engineering drawing. Here it holds
 * key facts, so the usual "stats row" reads as part of the drawing.
 */
export function TitleBlock({ cells, className }: TitleBlockProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t border-l border-line-strong md:grid-cols-4",
        className,
      )}
    >
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex flex-col-reverse justify-end gap-1.5 border-r border-b border-line-strong px-3 py-3 sm:px-4"
        >
          <dt className="font-mono text-label text-ink-muted uppercase">
            {cell.label}
          </dt>
          <dd className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
            {cell.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
