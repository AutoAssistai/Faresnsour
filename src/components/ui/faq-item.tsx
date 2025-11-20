"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: string;
  className?: string;
};

export function FAQItem({ question, answer, className }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur",
        className
      )}
    >
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-right"
        aria-expanded={open}
        whileTap={{ scale: 0.98 }}
      >
        <p className="text-lg font-semibold text-text-high text-balance">
          {question}
        </p>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-full border border-white/10 bg-white/5 p-1 text-primary-200"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.p
            key="answer"
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-sm text-text-medium"
          >
            {answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

