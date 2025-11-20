import Image from "next/image";
import Link from "next/link";

import { contactLinks } from "@/lib/content";
import { Container } from "@/components/ui";

const footerLinks = [
  { label: "المنتج", href: "/" },
  { label: "الدليل", href: "/demo" },
  { label: "لوحة التحكم", href: "/dashboard" },
  { label: "تواصل", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 text-sm text-text-medium">
      <Container className="grid gap-8 pb-10 md:grid-cols-[2fr,1fr]">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AutoAssist logo" width={32} height={32} />
            <p className="text-base font-semibold text-text-high">AutoAssist</p>
          </div>
          <p className="max-w-lg text-text-low">
            منصة SaaS عربية تعيد تعريف خدمة العملاء باستخدام الذكاء الاصطناعي،
            الأتمتة، والتحليلات التنفيذية الفورية.
          </p>
          <div className="grid gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={
                  item.value.startsWith("http")
                    ? item.value
                    : `mailto:${item.value}`
                }
                className="rounded-2xl border border-white/15 px-4 py-3 text-xs text-text-high transition hover:border-white/40"
              >
                <span className="block text-text-low">{item.label}</span>
                <span className="block break-all text-sm text-text-high">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-text-high"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="col-span-full text-xs text-text-low">
          © {new Date().getFullYear()} AutoAssist. جميع الحقوق محفوظة.
        </p>
      </Container>
    </footer>
  );
}
