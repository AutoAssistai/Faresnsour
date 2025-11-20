"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type FeatureItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

export function FeatureItem({
  title,
  description,
  icon,
  className,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-right shadow-soft backdrop-blur",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-2xl border border-primary-500/30 bg-primary-500/15 text-primary-100 text-lg">
        {icon ?? "✦"}
      </div>
      <div className="space-y-1">
        <p className="text-base font-semibold text-text-high">{title}</p>
        <p className="text-sm text-text-medium">{description}</p>
      </div>
    </motion.div>
  );
}

