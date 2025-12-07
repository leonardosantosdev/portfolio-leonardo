// components/sections/hero-section.tsx
import Image from "next/image";
import type { HeroContent } from "@/lib/types";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="border-b border-border bg-gradient-to-b from-background via-background to-background/0 pb-16 pt-10 sm:pb-24 sm:pt-16"
    >
      <div className="page-wrapper grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {content.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {content.name}
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {content.role}
          </p>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            {content.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#contact" size="lg">
              {content.primaryCta}
            </ButtonLink>
            <ButtonLink
              href="#projects"
              variant="ghost"
              size="lg"
              className="border border-border"
            >
              {content.secondaryCta}
            </ButtonLink>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {content.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-56 w-56 max-w-full sm:h-64 sm:w-64">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-primary/30 to-primary/10 blur-3xl" />
          <div className="relative h-full w-full rounded-[2rem] border border-border bg-background/80 p-3 shadow-soft">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-center text-xs text-slate-100">
              <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                {/* Replace /avatar.png with your own file in /public */}
                <Image
                  src="/avatar.jpg"
                  alt="Developer portrait"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                {content.eyebrow}
              </p>
              <p className="mt-2 text-sm font-semibold">{content.name}</p>
              <p className="mt-1 text-[0.7rem] text-slate-300">{content.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
