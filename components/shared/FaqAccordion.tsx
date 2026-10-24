"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";
import { FaqItem } from "./FaqItem";

type FaqAccordionProps = {
  faqs: Faq[];
  /** Prefix for element ids, so two accordions can share a page. */
  idPrefix: string;
};

export function FaqAccordion({ faqs, idPrefix }: FaqAccordionProps) {
  // Several answers can be open at once; the first starts open as a hint.
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set([0]),
  );

  const toggle = (index: number) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="border-t-2 border-line-strong">
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          faq={faq}
          id={`${idPrefix}-${index}`}
          number={index + 1}
          isOpen={openIndexes.has(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
