// components/ui/button.tsx
"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft",
    ghost:
      "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

  const variants: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft",
    ghost:
      "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
