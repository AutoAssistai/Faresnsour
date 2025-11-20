import type { Metadata } from "next";

import { heroContent } from "@/lib/content";
import { HeroSection } from "@/components/sections/hero";
import { ValueEngineSection } from "@/components/sections/value-engine";
import { WhySection } from "@/components/sections/why";
import { FeaturesSection } from "@/components/sections/features";
import { StepsSection } from "@/components/sections/steps";
import { ProjectsSection } from "@/components/sections/projects";
import { PainPointsSection } from "@/components/sections/pain-points";
import { UseCasesSection } from "@/components/sections/use-cases";
import { IndustriesSection } from "@/components/sections/industries";
import { AdvantageSection } from "@/components/sections/advantage";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "AutoAssist | منصة ذكاء اصطناعي لخدمة العملاء",
  description: heroContent.description,
  keywords: [
    "AutoAssist",
    "ذكاء اصطناعي",
    "خدمة العملاء",
    "منصة SaaS",
    "روبوت محادثة عربي",
  ],
  openGraph: {
    title: "AutoAssist | منصة ذكاء اصطناعي لخدمة العملاء",
    description: heroContent.description,
    url: "https://autoassist.example",
    images: [
      { url: "/banners/banner-1.png", width: 1200, height: 630, alt: "AutoAssist" },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueEngineSection />
      <WhySection />
      <FeaturesSection />
      <StepsSection />
      <ProjectsSection />
      <PainPointsSection />
      <UseCasesSection />
      <IndustriesSection />
      <AdvantageSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
