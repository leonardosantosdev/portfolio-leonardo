// components/providers/root-providers.tsx
"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { I18nProvider } from "./i18n-provider";

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
