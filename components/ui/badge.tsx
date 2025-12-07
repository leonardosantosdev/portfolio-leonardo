// components/ui/badge.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
