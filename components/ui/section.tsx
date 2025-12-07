// components/ui/section.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="page-wrapper space-y-8">
        {(eyebrow || title || subtitle) && (
          <header className="max-w-2xl space-y-3">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
