import type { Metadata } from "next";

import { heroContent } from "@/lib/content";
import { ContactForm } from "@/components/sections/contact-form";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "ارسل لنا رسالة حول مشروعك أو احجز محادثة مباشرة مع فريق AutoAssist.",
  keywords: [
    "AutoAssist",
    "تواصل",
    "دعم العملاء",
    "تكامل الذكاء الاصطناعي",
  ],
  openGraph: {
    title: "تواصل مع AutoAssist",
    description: heroContent.description,
    url: "https://autoassist.example/contact",
    images: [
      { url: "/banners/banner-1.png", width: 1200, height: 630, alt: "AutoAssist Contact" },
    ],
  },
};

export default function ContactPage() {
  return (
    <Section className="bg-white/[0.04]">
      <Container>
        <div className="space-y-4 text-right">
          <p className="text-sm text-text-low">تواصل</p>
          <h1 className="text-h2 font-semibold text-text-high">
            نساعدك في بناء تجربة عملاء تعتمد على الذكاء الاصطناعي.
          </h1>
          <p className="text-lg text-text-medium">
            شاركنا تفاصيل استخدامك الحالي، الأنظمة المتكاملة، وعدد الفريق. نعود إليك بخطة تنفيذ زمنية خلال يومي عمل.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
