import { Section } from "@/components/ui/Section";
import { productModules } from "@/data/modules";
import { ModuleScheduleRow } from "./ModuleScheduleRow";

/** The six modules, laid out like the parts list on an assembly drawing. */
export function ModuleSchedule() {
  return (
    <Section tone="sheet" aria-labelledby="modules-heading">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 id="modules-heading" className="max-w-xl text-h2">
          Six modules. One parts list for your whole sales process.
        </h2>
        <p className="max-w-sm text-ink-muted">
          Use one or all six. A won deal carries its BOM, price and approval
          straight into production.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="mt-12 hidden grid-cols-[4rem_16rem_1fr_auto] gap-6 bg-ink px-4 py-2.5 font-mono text-label text-surface uppercase md:grid"
      >
        <span>Item</span>
        <span>Module</span>
        <span>Function</span>
        <span>Specs</span>
      </div>
      <ol className="max-md:mt-10 max-md:border-t max-md:border-line-strong">
        {productModules.map((module, index) => (
          <ModuleScheduleRow key={module.id} module={module} index={index} />
        ))}
      </ol>
    </Section>
  );
}
