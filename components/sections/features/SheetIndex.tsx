import { ArrowDown } from "lucide-react";
import { productModules } from "@/data/modules";

/** In-page contents for the features page, styled as a drawing set's sheet index. */
export function SheetIndex() {
  return (
    <nav aria-labelledby="sheet-index-label">
      <p
        id="sheet-index-label"
        className="font-mono text-label text-ink-muted uppercase"
      >
        On this page
      </p>
      <ol className="mt-3 grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
        {productModules.map(({ id, name }, index) => (
          <li key={id} className="border-b border-line-strong sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0">
            <a
              href={`#${id}`}
              className="group flex items-center gap-4 px-1 py-3.5 transition-colors hover:bg-highlight/30 sm:px-3"
            >
              <span className="font-mono text-label text-ink-muted">
                2.{index + 1}
              </span>
              <span className="flex-1 font-semibold">{name}</span>
              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-y-0.5 group-hover:text-ink"
              />
            </a>
          </li>
        ))}
      </ol>
      <a
        href="#compare"
        className="mt-4 inline-block text-sm font-semibold underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-ink"
      >
        Compare KanchanFlow with a generic CRM and spreadsheets
      </a>
    </nav>
  );
}
