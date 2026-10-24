import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AppWindowProps = {
  /** Shown in the window's title bar, like a URL or screen name. */
  title: string;
  /** Describes the mockup for screen readers; the inner UI is decorative. */
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Frame for product UI mockups. Mockups keep a fixed light palette in both
 * site themes, the way a real product screenshot would.
 */
export function AppWindow({ title, label, children, className }: AppWindowProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden border border-line-strong bg-white text-graphite-900",
        "shadow-[0_24px_50px_-30px_rgb(21_23_26/0.45)]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-3 border-b border-steel-200 bg-steel-100 px-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-steel-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-steel-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-steel-300" />
        </span>
        <span className="truncate font-mono text-[11px] text-graphite-500">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
