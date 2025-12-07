// components/sections/process-section.tsx
import type { ProcessContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

interface ProcessSectionProps {
  content: ProcessContent;
}

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <Section id="process" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-4">
        {content.steps.map((step) => (
          <Card key={step.title} className="space-y-3">
            <h3 className="text-sm font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
