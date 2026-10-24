"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavLink } from "@/data/navigation";

type NavItemProps = {
  link: NavLink;
  className?: string;
  onNavigate?: () => void;
};

/** A nav link that marks itself as the current page for assistive tech and styling. */
export function NavItem({ link, className, onNavigate }: NavItemProps) {
  const pathname = usePathname();
  const isCurrent = link.href === pathname;

  return (
    <Link
      href={link.href}
      aria-current={isCurrent ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "relative font-medium text-ink-muted transition-colors duration-150 hover:text-ink active:text-accent-ink",
        className,
      )}
    >
      {link.label}
    </Link>
  );
}
