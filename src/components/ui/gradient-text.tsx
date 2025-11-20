import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = HTMLAttributes<HTMLSpanElement>;

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-l from-secondary-start via-primary-500 to-secondary-end bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  );
}

