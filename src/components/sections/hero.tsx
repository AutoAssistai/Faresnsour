"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { heroContent, whyAutoAssist } from "@/lib/content";
import {
  AnimatedCard,
  Badge,
  Button,
  Container,
  GradientText,
  Section,
} from "@/components/ui";

const typingPhrases = [
  "AutoAssist يكتب الآن...",
  "جارٍ تحليل نية العميل...",
  "يتم تحديث بيانات الطلب...",
];

export function HeroSection() {
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTypingIndex((prev) => (prev + 1) % typingPhrases.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="overflow-hidden border-white/5 bg-gradient-to-br from-[#040814] via-[#050d21] to-[#01030a] px-0 py-16 sm:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.25),transparent_50%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_35%,transparent_65%,rgba(255,255,255,0.05)_100%)] opacity-60" />
      </div>
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-right"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-1">
                <Image
                  src="/logo.png"
                  alt="AutoAssist logo"
                  width={28}
                  height={28}
                  className="rounded-xl"
                />
                <span className="text-xs font-semibold text-text-high">
                  AutoAssist
                </span>
              </div>
              <Badge className="bg-white/10 text-primary-100">
                منصة ذكاء اصطناعي عربية بالكامل
              </Badge>
            </div>
            <div className="space-y-6">
              <h1 className="text-h1 font-semibold leading-tight text-text-high text-balance">
                {heroContent.title}
              </h1>
              <p className="text-lg text-text-medium text-balance">
                {heroContent.description}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 text-sm text-text-medium shadow-soft">
              <div className="flex items-center justify-between text-xs text-text-low">
                <span>محرّك AutoAssist</span>
                <span>نشط الآن</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={typingIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-sm text-text-high"
                >
                  {typingPhrases[typingIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/demo">{heroContent.primaryCta}</Button>
              <Button variant="outline" href="/contact">
                {heroContent.secondaryCta}
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {whyAutoAssist.slice(0, 4).map((reason) => (
                <AnimatedCard
                  key={reason.title}
                  className="flex flex-col gap-1 border-white/15 bg-white/5 p-4 text-right"
                >
                  <p className="text-sm font-semibold text-text-high">
                    {reason.title}
                  </p>
                  <p className="text-xs text-text-medium">{reason.description}</p>
                </AnimatedCard>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-medium">
              <GradientText className="font-semibold text-base">
                +320٪
              </GradientText>
              متوسط نمو رضا العملاء خلال أول ٣ أشهر من التشغيل
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <AnimatedCard className="relative overflow-hidden border-white/5 bg-white/10 p-0">
              <div className="flex items-center justify-between px-6 pt-6 text-sm text-text-medium">
                <span>لوحة نشاط العملاء</span>
                <span>آخر ٦ ساعات</span>
              </div>
              <div className="tilt-card px-6 pb-6">
                <Image
                  src="/banners/banner-1.png"
                  alt="AutoAssist Experience"
                  width={960}
                  height={640}
                  priority
                  className="mt-6 h-[360px] w-full rounded-[32px] border border-white/10 object-cover shadow-deep"
                />
              </div>
              <div className="grid gap-4 border-t border-white/10 px-6 py-5 text-sm text-text-low sm:grid-cols-3">
                {["0.9 ثانية", "97% دقة", "12 تكامل"].map((stat) => (
                  <div key={stat} className="space-y-1">
                    <p className="text-xs text-text-medium">المؤشر</p>
                    <p className="text-base font-semibold text-text-high">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedCard>
            <div className="absolute -top-10 left-4 flex items-center gap-3 rounded-2xl border border-white/25 bg-black/60 px-4 py-3 text-xs text-text-high shadow-soft">
              <Image
                src="/logo.png"
                alt="AutoAssist logo miniature"
                width={28}
                height={28}
              />
              استجابة شبه فورية لجميع القنوات
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
