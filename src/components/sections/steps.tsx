"use client";

import { motion } from "framer-motion";

import { steps } from "@/lib/content";
import { Container, Section, SectionTitle } from "@/components/ui";

export function StepsSection() {
  return (
    <Section className="bg-gradient-to-r from-[#050917] to-[#08112b]">
      <Container>
        <SectionTitle
          eyebrow="كيف يعمل AutoAssist"
          title="منهجية تنفيذ مؤسسية بجدول زمني واضح"
          description="نعمل بشراكة مع فريقك لتحديد البيانات، بناء النموذج، وضمان نجاح الإطلاق مع مراقبة التحسين بعد الإنتاج."
        />
        <div className="mt-12 overflow-x-auto auto-scroll-x">
          <div className="flex min-w-max gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="w-[260px] flex-shrink-0 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur sm:w-[300px]"
              >
                <div className="text-sm text-text-low">0{index + 1}</div>
                <p className="mt-3 text-xl font-semibold text-text-high">
                  {step.title}
                </p>
                <p className="mt-3 text-sm text-text-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
