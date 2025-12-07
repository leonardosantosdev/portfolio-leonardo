// components/language-switcher.tsx
"use client";

import { useI18n } from "./providers/i18n-provider";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const locales: Locale[] = ["pt-BR", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-xs font-medium">
      {locales.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className={cn(
            "rounded-full px-2 py-0.5 transition-colors",
            locale === value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {value === "pt-BR" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
