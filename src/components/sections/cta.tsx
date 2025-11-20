import { heroContent } from "@/lib/content";
import { Button, Container, Section } from "@/components/ui";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-l from-secondary-start/30 via-primary-600/15 to-secondary-end/20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(255,255,255,0.12),transparent_55%)]" />
      <Container className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-text-high">
        <p className="text-sm text-text-low">جاهز لتجربة مستقبل خدمة العملاء؟</p>
        <h2 className="text-h2 font-semibold leading-tight text-balance">
          {heroContent.title}
        </h2>
        <p className="text-lg text-text-medium text-balance">
          {heroContent.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/demo">{heroContent.primaryCta}</Button>
          <Button variant="outline" href="/contact">
            {heroContent.secondaryCta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
