import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
};

/** An h2 with an optional supporting paragraph. Sections add their own annotations. */
export function SectionHeading({
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-5", className)}>
      <h2 id={id} className="text-h2">
        {title}
      </h2>
      {description && <p className="text-lead text-ink-muted">{description}</p>}
    </div>
  );
}
