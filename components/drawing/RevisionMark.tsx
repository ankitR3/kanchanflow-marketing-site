import { cn } from "@/lib/cn";

type RevisionMarkProps = {
  letter: string;
  /** Gold for the current revision, outline for superseded ones. */
  current?: boolean;
};

/** The triangle-and-letter symbol drawings use to flag a revision. */
export function RevisionMark({ letter, current = false }: RevisionMarkProps) {
  return (
    <span aria-hidden="true" className="relative inline-flex h-6 w-7 shrink-0">
      <span
        className={cn(
          "absolute inset-0 [clip-path:polygon(50%_0,100%_100%,0_100%)]",
          current ? "bg-gold-500" : "bg-line-strong",
        )}
      />
      {!current && (
        <span className="absolute inset-[2px] bg-surface [clip-path:polygon(50%_6%,96%_98%,4%_98%)]" />
      )}
      <span
        className={cn(
          "relative mt-auto w-full pb-0.5 text-center font-mono text-[10px] font-medium",
          current ? "text-graphite-950" : "text-ink",
        )}
      >
        {letter}
      </span>
    </span>
  );
}
