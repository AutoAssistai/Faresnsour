"use client";

import type { HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCardProps = MotionProps &
  HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
  };

export function AnimatedCard({
  className,
  hover = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.05] p-6 shadow-soft backdrop-blur-xl",
        className
      )}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
              boxShadow: "0 25px 60px rgba(10, 16, 45, 0.45)",
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
      {...props}
    />
  );
}

