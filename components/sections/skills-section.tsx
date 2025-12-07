// components/sections/skills-section.tsx
import type { SkillsContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
  content: SkillsContent;
}

export function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <Section id="skills" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.categories.map((category) => (
          <Card key={category.label} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full bg-accent/40 px-3 py-1 text-xs"
                >
                  <span className="font-medium">{skill.name}</span>
                  <Badge className="bg-transparent px-2 py-0 text-[0.65rem] uppercase tracking-[0.18em]">
                    {skill.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
