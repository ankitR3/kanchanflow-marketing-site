import type { ReactNode } from "react";
import { Figure } from "@/components/drawing/Figure";
import { cn } from "@/lib/cn";
import type { ProductModule } from "@/data/modules";

type FeatureRowProps = {
  module: ProductModule;
  index: number;
  mockup: ReactNode;
};

export function FeatureRow({ module, index, mockup }: FeatureRowProps) {
  const sectionNumber = `2.${index + 1}`;
  const mockupFirst = index % 2 === 1;
  const headingId = `${module.id}-heading`;
  const Icon = module.icon;

  return (
    <article
      id={module.id}
      aria-labelledby={headingId}
      className="grid items-center gap-12 border-b border-line-strong py-16 last:border-b-0 md:py-24 lg:grid-cols-2 lg:gap-16"
    >
      <div className={cn(mockupFirst && "lg:order-2")}>
        <p className="flex items-center gap-3 font-mono text-label text-ink-muted uppercase">
          <span className="text-ink">{sectionNumber}</span>
          <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
          <Icon aria-hidden="true" className="h-4 w-4 text-accent-ink" />
          {module.name}
        </p>
        <h2 id={headingId} className="mt-5 text-h2">
          {module.headline}
        </h2>
        <p className="mt-5 text-lead text-ink-muted">{module.description}</p>
        <ol className="mt-8 border-t border-line-strong">
          {module.points.map((point, pointIndex) => (
            <li
              key={point}
              className="flex gap-4 border-b border-line py-3"
            >
              <span
                aria-hidden="true"
                className="w-10 shrink-0 font-mono text-label leading-6 text-ink-muted"
              >
                {sectionNumber}.{pointIndex + 1}
              </span>
              {point}
            </li>
          ))}
        </ol>
      </div>
      <Figure
        number={sectionNumber}
        caption={module.figureCaption}
        className={cn("min-w-0", mockupFirst && "lg:order-1")}
      >
        {mockup}
      </Figure>
    </article>
  );
}
