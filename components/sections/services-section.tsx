// components/sections/services-section.tsx
import type { ServicesContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { useI18n } from "../providers/i18n-provider";

interface ServicesSectionProps {
  content: ServicesContent;
}

export function ServicesSection({ content }: ServicesSectionProps) {
  const { messages } = useI18n();
  const services = messages.services;
  return (
    <Section id="services" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-6 md:grid-cols-3">
        {content.items.map((service) => (
          <Card key={service.title} className="flex h-full flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 text-xs">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <ButtonLink
                href="#contact"
                variant="ghost"
                size="sm"
                className="px-0 text-xs font-medium text-primary hover:bg-transparent hover:text-primary/80"
              >
                {services.ctaLabel}
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
