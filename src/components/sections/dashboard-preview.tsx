"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Settings } from "lucide-react";

import { Container, Section, SectionTitle } from "@/components/ui";

const navItems = [
  "نظرة عامة",
  "المحادثات",
  "القنوات",
  "الأتمتة",
  "الإعدادات",
];

const analytics = [
  { label: "زمن الرد", value: "0.9 ثانية", trend: "-63%" },
  { label: "دقّة الردود", value: "97%", trend: "+5%" },
  { label: "محادثات مؤتمتة", value: "3,482", trend: "+18%" },
  { label: "توفير التكاليف", value: "32%", trend: "+3%" },
];

const chatFeed = [
  { from: "عميل", text: "احتاج مساعدة بخصوص فاتورتي.", channel: "واتساب" },
  { from: "AutoAssist", text: "تم ربط حسابك وتم جدولة الدفع تلقائياً.", channel: "AI" },
  { from: "عميل", text: "شكراً لكم!", channel: "واتساب" },
];

const statsGrid = [
  { title: "القنوات النشطة", value: "6", detail: "واتساب، موقع، تطبيق" },
  { title: "طلبات التصعيد", value: "3.1%", detail: "انخفاض 12%" },
  { title: "صافي رضا العملاء", value: "92", detail: "+4 نقاط" },
  { title: "تكاملات API", value: "12", detail: "Salesforce, SAP" },
  { title: "تكلفة الذكاء الاصطناعي", value: "$0.018", detail: "لكل محادثة مكتملة" },
  { title: "تكلفة يومية تقديرية", value: "$148", detail: "بناءً على 8.1k محادثة" },
];

const ranges = ["24 ساعة", "7 أيام", "30 يوماً"];

export function DashboardPreview() {
  const [range, setRange] = useState(ranges[0]);

  return (
    <Section className="relative overflow-hidden bg-white/[0.03]">
      <div className="grid-overlay absolute inset-0 opacity-20" />
      <Container className="relative z-10 space-y-10">
        <SectionTitle
          eyebrow="معاينة لوحة التحكم"
          title="لوحة تحكم تنفيذية تكشف جودة الخدمة، التكاملات، والأتمتة"
          description="توحّد AutoAssist كل مؤشرات الأداء في لوحة واحدة تشمل المحادثات، القنوات، والذكاء التنفيذي مع قابلية الحفر حتى مستوى المحادثة الفردية."
        />
        <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-text-medium">
            <p className="text-base font-semibold text-text-high">القائمة</p>
            <div className="mt-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  whileHover={{ x: -4 }}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-right ${
                    index === 0
                      ? "border-primary-500/40 bg-primary-500/10 text-text-high"
                      : "border-white/10 bg-transparent text-text-medium"
                  }`}
                >
                  <span>{item}</span>
                  <BarChart3 className="size-4 text-primary-200" />
                </motion.button>
              ))}
            </div>
            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-text-low">
              <p className="text-sm font-semibold text-text-high">
                حالة النظام
              </p>
              <p>استخدام الموارد 43% • آخر تحديث قبل 2 دقيقة</p>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-4">
              <div>
                <p className="text-sm text-text-low">{range}</p>
                <p className="text-xl font-semibold text-text-high">
                  مراقبة أداء AutoAssist
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                {ranges.map((item) => (
                  <button
                    key={item}
                    onClick={() => setRange(item)}
                    className={`rounded-full border px-4 py-2 ${
                      range === item
                        ? "border-primary-500/50 bg-primary-500/10 text-text-high"
                        : "border-white/15 text-text-medium"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {analytics.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft"
                >
                  <p className="text-sm text-text-low">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-text-high">
                    {item.value}
                  </p>
                  <p className="text-xs text-primary-200">{item.trend}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <motion.div
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between text-sm text-text-medium">
                  <span>تدفق المحادثات</span>
                  <Settings className="size-4 text-text-low" />
                </div>
                <div className="mt-6 grid grid-cols-12 gap-2 text-xs text-text-low">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className="rounded-full bg-gradient-to-b from-primary-500 to-secondary-end"
                        style={{ height: `${80 + index * 8}px` }}
                      />
                      <p className="text-center">{index + 7}ص</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between text-sm text-text-medium">
                  <span>مركز الدردشة</span>
                  <MessageSquare className="size-4 text-primary-200" />
                </div>
                <div className="mt-5 space-y-4">
                  {chatFeed.map((message, index) => (
                    <motion.div
                      key={message.text}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        message.from === "AutoAssist"
                          ? "border-primary-500/30 bg-primary-500/10 text-text-high"
                          : "border-white/10 bg-white/5 text-text-medium"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-text-low">
                        <span>{message.from}</span>
                        <span>{message.channel}</span>
                      </div>
                      <p className="mt-1 text-text-high">{message.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {statsGrid.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-text-high"
                >
                  <p className="text-xs text-text-low">{stat.title}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-text-medium">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
