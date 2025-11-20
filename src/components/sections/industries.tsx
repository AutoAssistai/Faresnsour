import { industries } from "@/lib/content";
import { Container, GradientText, Section, SectionTitle } from "@/components/ui";

export function IndustriesSection() {
  return (
    <Section className="bg-gradient-to-r from-[#040917] via-[#050f24] to-[#02050d]">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Industries"
          title="مصمم لفرق خدمة العملاء في القطاعات الأعلى حساسية"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-high shadow-soft"
            >
              <GradientText className="font-semibold">{industry}</GradientText>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

