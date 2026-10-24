"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { applyTheme, getActiveTheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

// The server can't know a saved choice, so it renders a neutral state.
const getServerTheme = (): Theme | null => null;

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getActiveTheme, getServerTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      disabled={theme === null}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink active:bg-line disabled:opacity-0"
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-5 w-5" />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}
