"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/content";
import { AnimatedCard, Button, Container, Section, SectionTitle } from "@/components/ui";

export function ProjectsSection() {
  return (
    <Section muted className="bg-white/[0.05]">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="مشاريع قيد التنفيذ"
          title="حلول جاهزة للتشغيل خلال أيام"
          description="نصمم واجهات ومخططات بيانات تتماشى مع هوية شركتك، ونوفر معاينة كاملة لكيفية إدارة المحادثات والتقارير قبل الإطلاق."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              hover
              transition={{ delay: index * 0.08 }}
              className="flex h-full flex-col gap-5 border-white/15 bg-gradient-to-b from-surface/60 to-black/60"
            >
              <div className="space-y-2 text-sm text-text-medium">
                <div className="flex items-center justify-between">
                  <span>{project.status}</span>
                  <ArrowUpRight className="size-4 text-primary-200" />
                </div>
                <h3 className="text-2xl font-semibold text-text-high">
                  {project.title}
                </h3>
                <p className="text-sm text-text-medium">{project.description}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={420}
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
              <Button
                href={project.github}
                className="w-full !justify-between !px-4 text-xs"
              >
                عرض المشروع على GitHub
                <ArrowUpRight className="size-4" />
              </Button>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
