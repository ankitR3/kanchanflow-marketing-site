import { cn } from "@/lib/cn";

type CalloutProps = {
  number: number;
  className?: string;
  /** "solid" for balloons placed over a mockup, "outline" inside text. */
  variant?: "solid" | "outline";
};

/** A numbered balloon, as used on drawings to point at a part. */
export function Callout({ number, className, variant = "outline" }: CalloutProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium",
        variant === "solid"
          ? "bg-graphite-950 text-gold-300 ring-4 ring-gold-400/40"
          : "border border-line-strong text-ink",
        className,
      )}
    >
      {number}
    </span>
  );
}
