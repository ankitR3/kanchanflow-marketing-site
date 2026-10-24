import Image from "next/image";
import type { Industry } from "@/data/home/industries";

type IndustryFigureProps = {
  industry: Industry;
  number: string;
};

export function IndustryFigure({ industry, number }: IndustryFigureProps) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden border border-line-strong bg-surface-sunken">
        <Image
          src={industry.image.src}
          alt={industry.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover grayscale transition-[filter,transform] duration-500 ease-out-quart group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <figcaption className="mt-3">
        <p className="font-mono text-label text-ink-muted">FIG. {number}</p>
        <h3 className="mt-1 text-h3">{industry.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">{industry.detail}</p>
      </figcaption>
    </figure>
  );
}
