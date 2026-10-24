import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionTone = "paper" | "sheet";

const toneClasses: Record<SectionTone, string> = {
  // Lets the page's steel paper show through.
  paper: "text-ink",
  // A white sheet laid on the paper, ruled top and bottom.
  sheet: "border-y border-line-strong bg-surface-raised text-ink",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  containerClassName?: string;
};

/** A full-width page band with section spacing and an inner Container. */
export function Section({
  tone = "paper",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-section", toneClasses[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
