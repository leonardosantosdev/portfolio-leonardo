// components/sections/contact-section.tsx
"use client";

import { useState } from "react";
import type { ContactContent } from "@/lib/types";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  content: ContactContent;
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    // Save the form element BEFORE any await
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      subject: (formData.get("subject") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset(); // use the saved reference, not event.currentTarget
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  const isLoading = status === "loading";
  return (
    <Section id="contact" title={content.title} subtitle={content.subtitle}>
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-muted-foreground"
              >
                {content.form.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={content.form.namePlaceholder}
                className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-muted-foreground"
              >
                {content.form.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={content.form.emailPlaceholder}
                className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-medium text-muted-foreground"
            >
              {content.form.subjectLabel}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder={content.form.subjectPlaceholder}
              className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-muted-foreground"
            >
              {content.form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={content.form.messagePlaceholder}
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              size="lg"
            >
              {isLoading ? (
                <>
                  <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-r-transparent" />
                  <span>{content.form.sendingLabel}</span>
                </>
              ) : (
                <span>{content.form.submitLabel}</span>
              )}
            </Button>
            <p
              className={cn(
                "text-xs text-muted-foreground",
                status === "success" && "text-green-600 dark:text-green-400",
                status === "error" && "text-destructive"
              )}
            >
              {status === "success" && content.successMessage}
              {status === "error" && content.errorMessage}
            </p>
          </div>
        </form>

        {/* <aside className="space-y-4 text-sm text-muted-foreground">
          <p>
            {content.emailLabel}{" "}
            <a
              href="mailto:leodossantoslds@gmail.com"
              className="font-medium text-primary hover:text-primary/80"
            >
              leodossantoslds@gmail.com
            </a>
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Social
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary/80"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary/80"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary/80"
            >
              Twitter
            </a>
          </div>
        </aside> */}
      </div>
    </Section>
  );
}
