import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Faq } from "@/data/faqs";

type FaqItemProps = {
  faq: Faq;
  id: string;
  number: number;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ faq, id, number, isOpen, onToggle }: FaqItemProps) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-line-strong">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-baseline gap-4 py-5 text-left font-sans text-base font-semibold transition-colors sm:text-lg"
        >
          <span aria-hidden="true" className="w-8 shrink-0 font-mono text-label text-ink-muted">
            Q{number}
          </span>
          <span className="flex-1 underline-offset-4 group-hover:underline">
            {faq.question}
          </span>
          <Plus
            aria-hidden="true"
            className={cn(
              "h-5 w-5 shrink-0 self-center transition-transform duration-200 ease-out-quart",
              isOpen && "rotate-45 text-accent-ink",
            )}
          />
        </button>
      </h3>
      {/* Grid-rows trick animates height without measuring the content. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out-quart",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-9 pb-6 pl-12 text-ink-muted">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
