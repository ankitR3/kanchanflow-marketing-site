import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StampProps = {
  children: ReactNode;
  className?: string;
  /** Plays the landing animation (respects reduced motion). */
  animated?: boolean;
};

/** A rubber-stamp mark in gold ink, slightly rotated. */
export function Stamp({ children, className, animated = false }: StampProps) {
  return (
    <span
      className={cn(
        "inline-block -rotate-[8deg] rounded-sm border-[3px] border-double border-gold-600 px-3 py-1 font-mono font-medium tracking-[0.18em] text-accent-ink uppercase",
        animated && "motion-safe:animate-[stamp-in_1.4s_var(--ease-out-quart)_both]",
        className,
      )}
    >
      {children}
    </span>
  );
}
