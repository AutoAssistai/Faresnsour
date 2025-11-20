"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "اللوحة التجريبية", href: "/dashboard" },
  { label: "الديمو", href: "/demo" },
  { label: "تواصل", href: "/contact" },
];

export function Navbar() {
  return (
    <motion.nav
      className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-text-medium shadow-[0_20px_80px_rgba(5,8,25,0.45)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link className="flex items-center gap-3" href="/">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-1 shadow-soft">
          <Image
            src="/logo.png"
            alt="AutoAssist"
            width={40}
            height={40}
            className="size-10 rounded-2xl object-contain"
            priority
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-text-high">AutoAssist</span>
          <span className="text-xs text-text-low">AI Customer OS</span>
        </div>
      </Link>

      <div className="hidden items-center gap-6 text-text-medium md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-text-high"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Button variant="secondary" href="/contact">
          {heroContent.secondaryCta}
        </Button>
        <Button href="/demo">{heroContent.primaryCta}</Button>
      </div>
    </motion.nav>
  );
}
