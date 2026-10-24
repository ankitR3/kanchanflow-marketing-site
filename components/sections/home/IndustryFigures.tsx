import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/home/industries";
import { IndustryFigure } from "./IndustryFigure";

export function IndustryFigures() {
  return (
    <Section
      id="industries"
      aria-labelledby="industries-heading"
      containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="industries-heading"
            // Non-breaking hyphens keep "high‑mix" and "big‑volume" on one line.
            title="Made for high‑mix shops, not just big‑volume lines."
            description="Costing templates come set up for how these trades quote, so your first quote starts from a working baseline instead of a blank form."
          />
        </div>
      </div>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-8">
        {industries.map((industry, index) => (
          <li key={industry.name}>
            <IndustryFigure industry={industry} number={`1.${index + 1}`} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
