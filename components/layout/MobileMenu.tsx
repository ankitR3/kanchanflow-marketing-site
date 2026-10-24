"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { primaryCta, primaryNav } from "@/data/navigation";
import { NavItem } from "./NavItem";

const menuId = "mobile-menu";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    // Move focus into the menu, stop the page scrolling behind it,
    // and let Escape close it and return focus to the toggle.
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    // Close if the viewport grows past the mobile breakpoint.
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpoint);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpoint);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-surface-sunken active:bg-line"
      >
        {isOpen ? (
          <X aria-hidden="true" className="h-5 w-5" />
        ) : (
          <Menu aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={menuId}
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto bg-surface px-gutter pt-6 pb-10 motion-safe:animate-[menu-in_200ms_var(--ease-out-quart)]"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {primaryNav.map((link, index) => (
                <li
                  key={link.href}
                  className="flex items-baseline gap-4 border-b border-line-strong"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-label text-ink-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <NavItem
                    link={link}
                    onNavigate={close}
                    className="flex flex-1 py-4 font-display text-2xl font-bold text-ink aria-[current=page]:text-accent-ink"
                  />
                </li>
              ))}
            </ul>
          </nav>
          <Button
            href={primaryCta.href}
            size="lg"
            onClick={close}
            className="mt-8 w-full"
          >
            {primaryCta.label}
          </Button>
        </div>
      )}
    </div>
  );
}
