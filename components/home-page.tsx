// components/home-page.tsx
"use client";

import { useI18n } from "./providers/i18n-provider";
import { HeroSection } from "./sections/hero-section";
import { AboutSection } from "./sections/about-section";
import { SkillsSection } from "./sections/skills-section";
import { ExperienceSection } from "./sections/experience-section";
import { ServicesSection } from "./sections/services-section";
import { ProjectsSection } from "./sections/projects-section";
import { TestimonialsSection } from "./sections/testimonials-section";
import { ProcessSection } from "./sections/process-section";
import { FaqSection } from "./sections/faq-section";
import { ContactSection } from "./sections/contact-section";

export function HomePage() {
  const { messages } = useI18n();

  return (
    <main>
      <HeroSection content={messages.hero} />
      <AboutSection content={messages.about} />
      <SkillsSection content={messages.skills} />
      <ExperienceSection content={messages.experience} />
      <ServicesSection content={messages.services} />
      <ProjectsSection content={messages.projects} />
      <TestimonialsSection content={messages.testimonials} />
      <ProcessSection content={messages.process} />
      <FaqSection content={messages.faq} />
      <ContactSection content={messages.contact} />
    </main>
  );
}
