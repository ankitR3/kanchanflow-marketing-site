import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { salesEmail } from "@/data/navigation";
import type { Faq } from "@/data/faqs";
import { FaqAccordion } from "./FaqAccordion";

type FaqSectionProps = {
  id: string;
  title: string;
  faqs: Faq[];
};

export function FaqSection({ id, title, faqs }: FaqSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section
      id={id}
      tone="sheet"
      aria-labelledby={headingId}
      containerClassName="grid gap-10 lg:grid-cols-12 lg:gap-8"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHeading title={title} id={headingId} />
          <p className="mt-6 text-ink-muted">
            Something we haven&apos;t covered?{" "}
            <a
              href={`mailto:${salesEmail}`}
              className="font-semibold text-ink underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-ink"
            >
              Email a sales engineer
            </a>
            . You&apos;ll hear back within one working day.
          </p>
        </div>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        <FaqAccordion faqs={faqs} idPrefix={id} />
      </div>
    </Section>
  );
}
