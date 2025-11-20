import { advantages } from "@/lib/content";
import {
  AnimatedCard,
  Container,
  Section,
  SectionTitle,
} from "@/components/ui";

export function AdvantageSection() {
  return (
    <Section muted className="bg-white/[0.03]">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Competitive Advantage"
          title="ما يميز AutoAssist عن بقية حلول الأتمتة"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {advantages.map((advantage) => (
            <AnimatedCard
              key={advantage.title}
              className="h-full border-white/15 bg-white/5 p-5 text-right"
            >
              <p className="text-base font-semibold text-text-high">
                {advantage.title}
              </p>
              <p className="mt-2 text-sm text-text-medium">
                {advantage.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

