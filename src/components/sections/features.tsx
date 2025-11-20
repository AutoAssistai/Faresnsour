"use client";

import { services } from "@/lib/content";
import {
  Badge,
  Container,
  FeatureItem,
  Section,
  SectionTitle,
} from "@/components/ui";

const featureDescriptions = [
  "يتعرّف على نية العميل وسياق الحساب قبل توليد الرد.",
  "يغلق المحادثة تلقائياً أو يصعدها مع ملخص غني.",
  "يبني لوحات ذكاء تنفيذية في الوقت الحقيقي.",
  "يتكامل مع CRM وERP في دقائق.",
  "يدعم قوالب محادثة مخصصة لكل نشاط.",
];

export function FeaturesSection() {
  return (
    <Section className="bg-gradient-to-b from-[#070d24] to-[#030615]">
      <Container className="space-y-10">
        <div className="space-y-4 text-center lg:text-right">
          <Badge className="mx-auto w-fit border-primary-500/30 bg-primary-500/10 text-primary-100 lg:mx-0">
            جاهز لمستوى المؤسسات الكبرى
          </Badge>
          <SectionTitle
            eyebrow="Key Features"
            title="قدرات مؤسسية جاهزة للإطلاق"
            description="من الروبوت العربي الذكي وحتى تكاملات API ولوحات التحليلات، صُممت AutoAssist لدعم فرق خدمة العملاء في الشركات الكبرى."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <FeatureItem
              key={service.title}
              title={service.title}
              description={
                service.description ?? featureDescriptions[index] ?? featureDescriptions[0]
              }
              icon={String(index + 1)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
