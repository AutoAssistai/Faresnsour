import { useCases } from "@/lib/content";
import { AnimatedCard, Container, Section, SectionTitle } from "@/components/ui";

export function UseCasesSection() {
  return (
    <Section muted className="bg-white/[0.04]">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Use Cases"
          title="طرق استخدام AutoAssist في القطاعات المتنوعة"
          description="نبدأ من سيناريوهات واضحة الأثر ثم نوسع الذكاء تدريجياً مع كل أسبوع تشغيل."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <AnimatedCard
              key={useCase.title}
              className="border-white/15 bg-white/5 p-5 text-right"
            >
              <p className="text-base font-semibold text-text-high">
                {useCase.title}
              </p>
              <p className="mt-2 text-sm text-text-medium">{useCase.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

