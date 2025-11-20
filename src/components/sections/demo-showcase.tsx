"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { heroContent, services } from "@/lib/content";
import { Button, Container, Input, Section, SectionTitle } from "@/components/ui";

const initialMessages = [
  { author: "العميل", content: "أحتاج تحديث حالة شحنة رقم 5481.", time: "09:02" },
  {
    author: "AutoAssist",
    content: "تم العثور على الطلب. الشحنة وصلـت لمركز التوزيع وستُسلّم اليوم 4:30م.",
    time: "09:02",
  },
];

const aiReplies = [
  "تم ربط طلبك بخط سير جديد، وستصلك رسالة تأكيد بعد 30 ثانية.",
  "تم تغيير العنوان بنجاح، وتم إعلام فريق التنفيذ تلقائياً.",
  "تم فتح تذكرة متابعة وسيتم إغلاقها تلقائياً فور التسليم.",
];

export function DemoShowcase() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [replyIndex, setReplyIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSend = () => {
    if (!input.trim() || typing) return;
    const time = new Date().toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { author: "العميل", content: input.trim(), time }]);
    setInput("");
    setTyping(true);
    timeoutRef.current = setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prev) => [
        ...prev,
        { author: "AutoAssist", content: aiReplies[replyIndex], time: replyTime },
      ]);
      setReplyIndex((prev) => (prev + 1) % aiReplies.length);
      setTyping(false);
    }, 1400);
  };

  return (
    <Section className="bg-gradient-to-b from-[#060c1f] to-[#02040a]">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
        <div className="space-y-6 text-right">
          <SectionTitle
            eyebrow="صفحة الديمو"
            title="شاهد كيف يعالج AutoAssist محادثاتك في الوقت الحقيقي"
            description="نشغّل جلسة مباشرة مع مهندس حلول يستعرض الربط، التدريب، ولوحات المراقبة الخاصة بك بالاعتماد على بياناتك أو بيانات محاكاة مشابهة."
          />
          <div className="space-y-3 text-sm text-text-high">
            {services.map((service) => (
              <div key={service.title} className="flex items-center gap-3">
                <span className="inline-flex size-8 items-center justify-center rounded-2xl border border-primary-500/20 bg-primary-500/10 text-primary-200">
                  ✓
                </span>
                <p>{service.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/demo">{heroContent.primaryCta}</Button>
            <Button variant="outline" href="mailto:autoassist.contact@yahoo.com">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-deep"
        >
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-text-medium">
            <p className="text-base font-semibold text-text-high">محاكاة الدردشة</p>
            <p className="text-xs text-text-low">الردود في أقل من ثانية واحدة</p>
            <div className="mt-4 flex flex-col gap-4">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.content}-${index}`}
                  initial={{ opacity: 0, x: message.author === "AutoAssist" ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`rounded-2xl border px-4 py-3 text-sm shadow-soft transition ${
                    message.author === "AutoAssist"
                      ? "ml-auto max-w-[85%] border-primary-500/30 bg-primary-500/10 text-text-high shadow-[0_0_25px_rgba(37,99,235,0.35)]"
                      : "mr-auto max-w-[85%] border-white/15 bg-white/5 text-text-medium"
                  }`}
                >
                  <p className="text-xs text-text-low">{message.author}</p>
                  <p className="mt-1 text-text-high">{message.content}</p>
                  <span className="mt-1 block text-[11px] text-text-low">{message.time}</span>
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  className="ml-auto flex w-fit items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-low"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                >
                  AutoAssist يكتب الآن
                  <span className="flex gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-200" />
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-200" />
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-200" />
                  </span>
                </motion.div>
              )}
            </div>
            <div className="mt-6 space-y-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالة تجريبية..."
              />
              <Button onClick={handleSend} disabled={!input.trim()} className="w-full">
                إرسال المحادثة
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
