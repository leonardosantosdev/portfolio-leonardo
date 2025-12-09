// components/sections/testimonials-section.tsx
import type { TestimonialsContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TestimonialsSectionProps {
  content: TestimonialsContent;
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  if (!content.items.length) return null;

  return (
    <Section id="testimonials" title={content.title} subtitle={content.subtitle}>
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {content.items.map((testimonial, index) => (
          <Card
            key={`${testimonial.name}-${index}`}
            className="flex h-full flex-col justify-between"
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              “{testimonial.quote}”
            </p>

            <div className="mt-4 flex items-center gap-3">
              {testimonial.avatarUrl && (
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
