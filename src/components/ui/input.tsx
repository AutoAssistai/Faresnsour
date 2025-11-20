import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-text-high placeholder:text-text-low focus:border-primary-500 focus:outline-none focus:ring-0",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

