// components/sections/about-section.tsx
import type { AboutContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="about" title={content.title}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {content.body}
        </p>
        <Card className="space-y-4 bg-accent/40">
          {content.highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline justify-between gap-4 text-sm"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </span>
              <span className="text-right text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}
