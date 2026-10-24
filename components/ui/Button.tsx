import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "accent" | "outline";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 border font-semibold whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform] duration-150 ease-out-quart " +
  "active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  // Ink on paper; heats up to molten gold on hover.
  primary:
    "border-ink bg-ink text-surface hover:border-gold-500 hover:bg-gold-500 hover:text-graphite-950 " +
    "active:border-gold-600 active:bg-gold-600 disabled:border-line disabled:bg-line disabled:text-ink-muted",
  // Gold from the start: for the dark footer, where ink would disappear.
  accent:
    "border-gold-500 bg-gold-500 text-graphite-950 hover:border-gold-400 hover:bg-gold-400 " +
    "active:bg-gold-600 disabled:opacity-60",
  outline:
    "border-ink text-ink hover:bg-ink hover:text-surface active:bg-ink/85 disabled:opacity-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
