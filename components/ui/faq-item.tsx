// components/ui/faq-item.tsx
"use client";

import { useState } from "react";
import type { FaqItem as FaqItemType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  item: FaqItemType;
}

export function FaqItem({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium sm:text-base">{item.question}</span>
        <span
          className={cn(
            "inline-flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-transform",
            open && "rotate-90"
          )}
          aria-hidden="true"
        >
          →
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.answer}
        </p>
      )}
    </div>
  );
}
