// components/theme-toggle.tsx
"use client";

import { useTheme } from "./providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const label = theme === "dark" ? "Use light theme" : "Use dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
