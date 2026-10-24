export type Theme = "light" | "dark";

export const themeStorageKey = "kanchanflow-theme";

/**
 * Runs before first paint (inlined in <head>) so a saved dark theme
 * is applied without a flash of the light one.
 */
export const themeInitScript = `try{if(localStorage.getItem("${themeStorageKey}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

/** Light is the default; dark only when the visitor has chosen it. */
export function getActiveTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Storage can be blocked (private mode); the choice then lasts for this visit only.
  }
}
