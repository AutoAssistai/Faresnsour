import { painPoints } from "@/lib/content";
import { AnimatedCard, Container, Section, SectionTitle } from "@/components/ui";

export function PainPointsSection() {
  return (
    <Section className="bg-gradient-to-b from-[#050917] via-[#040b17] to-[#01030a]">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="ما نحله الآن"
          title="ثلاث مشكلات تعيق نمو خدمة العملاء"
          description="فريقك يعاني من هذه التحديات يومياً، لذلك بنينا AutoAssist ليعالجها بدون زيادة تعقيد التشغيل."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {painPoints.map((pain) => (
            <AnimatedCard
              key={pain.title}
              className="h-full border-white/15 bg-white/[0.04] p-5 text-right"
            >
              <p className="text-base font-semibold text-text-high">
                {pain.title}
              </p>
              <p className="mt-2 text-sm text-text-medium">{pain.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

