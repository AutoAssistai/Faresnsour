import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
  muted?: boolean;
};

/**
 * Section is the primary shell used across the marketing pages.
 * It enforces the radius, borders, and spacing from the theme tokens
 * so that every block feels cohesive (glass aesthetic + depth shadow).
 */
export function Section({
  as: Tag = "section",
  muted,
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "relative rounded-[32px] border border-white/10 px-6 py-14 shadow-soft lg:px-10",
        muted
          ? "bg-white/[0.04]"
          : "bg-gradient-to-b from-surface/80 via-surface/70 to-black/50",
        className
      )}
      {...props}
    />
  );
}

