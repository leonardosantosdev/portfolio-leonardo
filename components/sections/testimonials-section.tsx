// components/sections/testimonials-section.tsx
import type { TestimonialsContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

interface TestimonialsSectionProps {
  content: TestimonialsContent;
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  if (!content.items.length) return null;

  return (
    <Section id="testimonials" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((testimonial, index) => (
          <Card key={`${testimonial.name}-${index}`} className="space-y-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              “{testimonial.quote}”
            </p>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
