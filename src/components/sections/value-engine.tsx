import { valueEngine } from "@/lib/content";
import {
  AnimatedCard,
  Container,
  GradientText,
  Section,
  SectionTitle,
} from "@/components/ui";

export function ValueEngineSection() {
  return (
    <Section muted className="bg-white/[0.03]">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="AutoAssist Value Engine"
          title="كل طبقة من المحرك مصمّمة لتقليل زمن الرد ورفع الدقة"
          description="نعيد ترتيب البيانات، فهم سياق العميل، ثم نطلق ردوداً دقيقة مع مراقبة دائمة لجودة النتيجة."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {valueEngine.map((item) => (
            <AnimatedCard
              key={item.title}
              className="flex flex-col gap-4 border-white/15 bg-white/5 p-6 text-right"
            >
              <p className="text-sm text-text-low">{item.metricLabel}</p>
              <GradientText className="text-3xl font-semibold">
                {item.metric}
              </GradientText>
              <p className="text-xl font-semibold text-text-high">{item.title}</p>
              <p className="text-sm text-text-medium">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

