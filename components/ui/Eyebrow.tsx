import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** A small drawing annotation above a heading, led by a short ink rule. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-label font-medium uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
