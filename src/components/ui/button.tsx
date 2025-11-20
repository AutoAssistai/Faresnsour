"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: undefined;
};

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-l from-primary-600 via-primary-500 to-secondary-end text-white shadow-medium",
  secondary: "bg-white/10 text-text-high border border-white/15 shadow-soft",
  outline:
    "border border-white/25 text-text-high hover:border-white/50 bg-transparent",
};

const sharedEffects = {
  whileHover: { y: -2, boxShadow: "0 20px 60px rgba(15, 23, 52, 0.45)" },
  whileTap: { scale: 0.97 },
};

const baseClass = "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    if ("href" in props && props.href) {
      const { className, variant = "primary", href, children, ...rest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(
            baseClass,
            variantStyles[variant],
            "hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(15,23,52,0.45)] active:scale-[0.98]",
            className
          )}
          {...rest}
        >
          {children}
        </a>
      );
    }

    const {
      className,
      variant = "primary",
      disabled,
      type,
      children,
      ...rest
    } = props as NativeButtonProps;
    const motionProps = rest as unknown as HTMLMotionProps<"button">;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        type={type ?? "button"}
        className={cn(
          baseClass,
          "disabled:cursor-not-allowed disabled:opacity-60",
          variantStyles[variant],
          className
        )}
        {...(disabled ? {} : sharedEffects)}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
