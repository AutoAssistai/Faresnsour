import type { Metadata } from "next";

import { DashboardPreview } from "@/components/sections/dashboard-preview";

export const metadata: Metadata = {
  title: "معاينة لوحة التحكم",
  description:
    "لقطة مستقبلية لواجهة AutoAssist مع بطاقات الأداء، سير المحادثات، ولوحة المراقبة الذكية.",
  keywords: ["لوحة تحكم", "تحليلات خدمة العملاء", "AutoAssist"],
  openGraph: {
    title: "Dashboard | AutoAssist",
    description:
      "لوحة تحكم تنفيذية تعرض جودة الخدمة، تدفق المحادثات، والتكاملات في وقت حقيقي.",
    url: "https://autoassist.example/dashboard",
    images: [
      {
        url: "/banners/banner-1.png",
        width: 1200,
        height: 630,
        alt: "AutoAssist Dashboard",
      },
    ],
  },
};

export default function DashboardPage() {
  return <DashboardPreview />;
}
