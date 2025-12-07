// components/sections/faq-section.tsx
import type { FaqContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { FaqItem } from "@/components/ui/faq-item";

interface FaqSectionProps {
  content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  if (!content.items.length) return null;

  return (
    <Section id="faq" title={content.title} subtitle={content.subtitle}>
      <div className="divide-y divide-border">
        {content.items.map((item) => (
          <FaqItem key={item.question} item={item} />
        ))}
      </div>
    </Section>
  );
}
