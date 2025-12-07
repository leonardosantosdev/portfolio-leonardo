// components/sections/experience-section.tsx
import type { ExperienceContent } from "@/lib/types";
import { Section } from "@/components/ui/section";

interface ExperienceSectionProps {
  content: ExperienceContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <Section id="experience" title={content.title} subtitle={content.subtitle}>
      <ol className="relative border-l border-border pl-4">
        {content.items.map((item, index) => (
          <li key={`${item.company}-${index}`} className="mb-8 ml-2">
            <div className="absolute -left-[10px] mt-1 h-2.5 w-2.5 rounded-full border border-primary bg-background" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold">
                  {item.role}{" "}
                  <span className="text-muted-foreground">@ {item.company}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.period} · {item.location}
                </p>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 text-xs">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
