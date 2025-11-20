import { Sparkles } from "lucide-react";

import { whyAutoAssist } from "@/lib/content";
import {
  AnimatedCard,
  Container,
  GradientText,
  Section,
  SectionTitle,
} from "@/components/ui";

export function WhySection() {
  return (
    <Section muted className="bg-white/[0.03]">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="لماذا AutoAssist"
          title="منصة واحدة تغطي تجربة العملاء، الأتمتة، والتحليلات في الوقت الحقيقي."
          description="نربط قنوات الدعم، الذكاء الاصطناعي، والتقارير التنفيذية ضمن تجربة عربية متكاملة بحيث تنتقل فرقك من العمل التشغيلي إلى التحسين الاستراتيجي."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyAutoAssist.map((item, index) => (
            <AnimatedCard
              key={item.title}
              className="flex items-start gap-4 border-white/15 bg-white/5 p-5"
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex size-11 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-primary-100">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-base font-semibold text-text-high">
                  {item.title}
                </p>
                <p className="text-sm text-text-medium">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <p className="text-center text-sm text-text-low">
          <GradientText>مؤشر التزام</GradientText> يتابع SLA الردود، الدقة
          اللغوية، وتكلفة المحادثة لكل قناة.
        </p>
      </Container>
    </Section>
  );
}

