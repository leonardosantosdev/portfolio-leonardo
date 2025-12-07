// components/ui/card.tsx
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/80 p-6 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
