import { faqs } from "@/lib/content";
import { Container, FAQItem, Section, SectionTitle } from "@/components/ui";

export function FAQSection() {
  return (
    <Section muted className="bg-white/[0.04]">
      <Container className="max-w-4xl">
        <SectionTitle
          align="center"
          eyebrow="الأسئلة الشائعة"
          title="كل التفاصيل الفنية والتجارية التي يحتاجها فريقك"
          description="إذا احتجت مزيداً من المعلومات يمكن لفريق AutoAssist مشاركة دليل التكامل الكامل وجلسة فنية مباشرة."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
