// components/header.tsx
"use client";

import Link from "next/link";
import { useI18n } from "./providers/i18n-provider";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS: {
  href: string;
  key: keyof ReturnType<typeof useI18n>["messages"]["navigation"];
}[] = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
];

export function Header() {
  const { messages } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="page-wrapper flex h-16 items-center justify-between gap-4">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
            {/* Initials - customize */}
            LS
          </span>
          <span className="hidden sm:inline-block">Leonardo Santos</span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-xs font-medium text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn("transition-colors hover:text-foreground")}
            >
              {messages.navigation[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
