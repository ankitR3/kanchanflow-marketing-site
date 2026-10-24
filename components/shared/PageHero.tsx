import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  /** Sheet label, e.g. "Sheet 02 · Features". */
  sheet: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

/** The opening band for inner pages, on graph paper. Holds the page's only h1. */
export function PageHero({ sheet, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-graph border-b border-line-strong">
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          <Eyebrow className="text-ink-muted">{sheet}</Eyebrow>
          <h1 className="mt-6 text-display">{title}</h1>
          <p className="mt-6 max-w-2xl text-lead text-ink-muted">{description}</p>
        </div>
        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
