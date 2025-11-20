"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { contactLinks } from "@/lib/content";
import { Button, Input, Textarea } from "@/components/ui";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const invalid = useMemo(() => {
    if (!form.name.trim()) return true;
    if (!emailRegex.test(form.email)) return true;
    if (form.message.trim().length < 12) return true;
    return false;
  }, [form]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!emailRegex.test(form.email)) newErrors.email = "البريد غير صالح";
    if (form.message.trim().length < 12)
      newErrors.message = "الرسالة يجب أن تكون أوضح";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-[28px] border border-white/10 bg-surface p-6 shadow-medium"
      >
        <div>
          <label className="text-sm text-text-low">الاسم الكامل</label>
          <Input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="اسمك والشركة"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-primary-200">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm text-text-low">البريد الإلكتروني</label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-primary-200">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm text-text-low">الرسالة</label>
          <Textarea
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="شاركنا التحدي الحالي، الأهداف، أو التكامل المطلوب"
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-primary-200">{errors.message}</p>
          ) : null}
        </div>
        <Button type="submit" disabled={invalid} className="w-full">
          {invalid ? "أكمل البيانات" : "إرسال"}
        </Button>
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              aria-live="polite"
              className="flex items-center gap-3 rounded-2xl border border-primary-500/30 bg-primary-500/15 px-4 py-3 text-sm text-primary-100"
            >
              <CheckCircle2 className="size-5" />
              تم استلام رسالتك، سيتواصل فريق AutoAssist خلال يومي عمل.
            </motion.div>
          ) : null}
        </AnimatePresence>
      </form>
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-text-high shadow-soft">
        <p className="text-base font-semibold text-text-high">
          معلومات التواصل الرسمية
        </p>
        <div className="mt-4 space-y-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={
                item.value.startsWith("http")
                  ? item.value
                  : `mailto:${item.value}`
              }
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-text-medium transition hover:border-white/40"
            >
              <span className="text-xs text-text-low">{item.label}</span>
              <span className="text-sm font-semibold text-text-high break-words">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
