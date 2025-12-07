// lib/types.ts
export type Locale = "pt-BR" | "en";

export interface Skill {
  name: string;
  icon?: string; // you can map this to an icon set later
  level: "Advanced" | "Intermediate" | "Beginner";
}

export interface SkillCategory {
  label: string;
  items: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export interface Project {
  title: string;
  summary: string;
  role: string;
  tech: string[];
  tags: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  imageAlt: string;
  longDescription?: string;
  images?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  role: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  badges: string[];
}

export interface AboutContent {
  title: string;
  body: string;
  highlights: { label: string; value: string }[];
}

export interface SkillsContent {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export interface ExperienceContent {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  items: Service[];
  ctaLabel: string;
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
  items: Project[];
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface ProcessContent {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface FaqContent {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  emailLabel: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sendingLabel: string;
  };
  successMessage: string;
  errorMessage: string;
}

export interface NavigationContent {
  home: string;
  about: string;
  skills: string;
  experience: string;
  services: string;
  projects: string;
  testimonials: string;
  process: string;
  faq: string;
  contact: string;
}

export interface FooterContent {
  copyright: string;
  builtBy: string;
  quickLinksLabel: string;
  socialLabel: string;
}

export interface MetaContent {
  title: string;
  description: string;
}

export interface Translations {
  meta: MetaContent;
  navigation: NavigationContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  services: ServicesContent;
  projects: ProjectsContent;
  testimonials: TestimonialsContent;
  process: ProcessContent;
  faq: FaqContent;
  contact: ContactContent;
  footer: FooterContent;
}
