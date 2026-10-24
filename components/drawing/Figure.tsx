import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FigureProps = {
  /** Figure number, e.g. "2.1". */
  number: string;
  caption: string;
  children: ReactNode;
  className?: string;
};

// Crop marks at each corner, like a printed drawing sheet.
const cornerMarks = [
  "-top-2 -left-2 border-t border-l",
  "-top-2 -right-2 border-t border-r",
  "-bottom-2 -left-2 border-b border-l",
  "-right-2 -bottom-2 border-r border-b",
];

export function Figure({ number, caption, children, className }: FigureProps) {
  return (
    <figure className={cn("relative", className)}>
      {cornerMarks.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn("absolute h-4 w-4 border-line-strong", position)}
        />
      ))}
      {children}
      <figcaption className="mt-5 flex gap-3 font-mono text-label text-ink-muted">
        <span className="shrink-0 text-ink">FIG. {number}</span>
        <span className="normal-case">{caption}</span>
      </figcaption>
    </figure>
  );
}
