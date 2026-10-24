import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";
import { LogoMark } from "./LogoMark";

type LogoProps = {
  /** "inverse" for the dark footer, where the accent needs a lighter gold. */
  tone?: "default" | "inverse";
  className?: string;
};

export function Logo({ tone = "default", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <LogoMark className="h-7 w-7" />
      <span className="font-display text-lg font-extrabold tracking-tight [font-stretch:112%]">
        Kanchan
        <span className={tone === "inverse" ? "text-gold-400" : "text-accent-ink"}>
          Flow
        </span>
      </span>
    </Link>
  );
}
