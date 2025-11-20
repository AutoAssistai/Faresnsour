import type { Metadata } from "next";
import Script from "next/script";
import { Cairo } from "next/font/google";
import "./globals.css";

import { contactLinks, heroContent } from "@/lib/content";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoassist.example"),
  title: {
    default: "AutoAssist | منصة ذكاء اصطناعي لخدمة العملاء",
    template: "%s | AutoAssist",
  },
  description: heroContent.description,
  keywords: [
    "AutoAssist",
    "ذكاء اصطناعي",
    "خدمة العملاء",
    "منصة SaaS عربية",
    "بوت خدمة العملاء الذكي",
  ],
  openGraph: {
    title: "AutoAssist | منصة ذكاء اصطناعي لخدمة العملاء",
    description: heroContent.description,
    url: "https://autoassist.example",
    locale: "ar",
    siteName: "AutoAssist",
    images: [
      {
        url: "/banners/banner-1.png",
        width: 1200,
        height: 630,
        alt: "AutoAssist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoAssist",
    description: heroContent.description,
    images: ["/banners/banner-1.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AutoAssist",
  url: "https://autoassist.example",
  logo: "https://autoassist.example/logo.png",
  sameAs: contactLinks
    .filter((link) => link.value.startsWith("http"))
    .map((link) => link.value),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "autoassist.contact@yahoo.com",
      availableLanguage: ["ar", "en"],
      areaServed: "AE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} bg-surface text-text-high antialiased`}>
        <div className="min-h-dvh bg-gradient-to-b from-[#020409] to-[#050b1a] px-4 py-6 sm:px-6">
          <Navbar />
          <main className="mt-10 flex flex-col gap-10">{children}</main>
          <Footer />
        </div>
        <Script
          id="autoassist-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(schema)}
        </Script>
      </body>
    </html>
  );
}
