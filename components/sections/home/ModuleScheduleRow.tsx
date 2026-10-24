import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Callout } from "@/components/drawing/Callout";
import type { ProductModule } from "@/data/modules";

type ModuleScheduleRowProps = {
  module: ProductModule;
  index: number;
};

export function ModuleScheduleRow({ module, index }: ModuleScheduleRowProps) {
  const Icon = module.icon;

  return (
    <li className="group relative grid gap-3 border-b border-line-strong px-1 py-6 transition-colors duration-150 hover:bg-highlight/25 md:grid-cols-[4rem_16rem_1fr_auto] md:items-center md:gap-6 md:px-4">
      <Callout number={index + 1} className="max-md:hidden" />
      <h3 className="flex items-center gap-3 text-h3">
        <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-ink" />
        {module.name}
      </h3>
      <p className="text-ink-muted">{module.summary}</p>
      {/* The stretched ::after makes the whole row clickable through one link. */}
      <Link
        href={`/features#${module.id}`}
        className="inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap after:absolute after:inset-0 after:content-['']"
      >
        <span className="underline decoration-line underline-offset-4 group-hover:decoration-ink">
          {module.name} details
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </li>
  );
}
