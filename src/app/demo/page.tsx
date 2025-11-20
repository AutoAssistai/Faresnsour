import type { Metadata } from "next";

import { DemoShowcase } from "@/components/sections/demo-showcase";

export const metadata: Metadata = {
  title: "صفحة الديمو",
  description:
    "احجز جلسة تفاعلية لمعاينة AutoAssist مع فريقك وشاهد كيف يتعامل مع محادثاتك الحقيقية.",
  keywords: ["AutoAssist Demo", "محاكاة الذكاء الاصطناعي", "تشغيل تجريبي"],
  openGraph: {
    title: "Demo | AutoAssist",
    description:
      "جلسة حية توضح كيفية تدريب وربط AutoAssist مع أنظمتك وتشغيل الردود الفورية.",
    url: "https://autoassist.example/demo",
    images: [
      {
        url: "/banners/banner-1.png",
        width: 1200,
        height: 630,
        alt: "AutoAssist Demo",
      },
    ],
  },
};

export default function DemoPage() {
  return <DemoShowcase />;
}
