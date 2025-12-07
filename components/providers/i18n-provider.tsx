// components/providers/i18n-provider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Locale, Translations } from "@/lib/types";
import { dictionaries } from "@/lib/i18n/dictionary";

interface I18nContextValue {
  locale: Locale;
  messages: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "pt-BR" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);

  const value: I18nContextValue = {
    locale,
    messages: dictionaries[locale],
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}
