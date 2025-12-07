// components/footer.tsx
"use client";

import Link from "next/link";
import { useI18n } from "./providers/i18n-provider";

export function Footer() {
  const { messages } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 py-8">
      <div className="page-wrapper flex flex-col gap-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © {year} · {messages.footer.builtBy}
          </p>
          <p>{messages.footer.copyright}</p>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <div>
            <p className="mb-1 font-medium text-foreground">
              {messages.footer.quickLinksLabel}
            </p>
            <div className="flex gap-3">
              <Link href="#hero" className="hover:text-foreground">
                {messages.navigation.home}
              </Link>
              <Link href="#projects" className="hover:text-foreground">
                {messages.navigation.projects}
              </Link>
              <Link href="#contact" className="hover:text-foreground">
                {messages.navigation.contact}
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-1 font-medium text-foreground">
              {messages.footer.socialLabel}
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5535991908677"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                WhatsApp
              </a>
              <a
                href="https://github.com/leonardosantosdev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardosantosdeveloper/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="mailto:leodossantoslds@gmail.com"
                className="hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
