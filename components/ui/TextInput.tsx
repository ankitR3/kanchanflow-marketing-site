import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type TextInputProps = ComponentProps<"input"> & {
  label: string;
  error?: string;
  /** Use "dark" when the input sits on a graphite background. */
  tone?: "light" | "dark";
};

export function TextInput({
  label,
  error,
  tone = "light",
  id,
  className,
  ...props
}: TextInputProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "h-11 w-full rounded-sm border px-3 text-base transition-colors duration-150",
          "focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
          tone === "dark"
            ? "border-white/20 bg-white/5 text-steel-50 placeholder:text-steel-50/60 hover:border-white/40 aria-invalid:border-red-400"
            : "border-line bg-surface-raised text-ink placeholder:text-ink-muted hover:border-graphite-400 aria-invalid:border-danger-600",
        )}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          className={cn(
            "text-sm",
            tone === "dark" ? "text-red-300" : "text-danger-600",
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}
