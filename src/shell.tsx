import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { dict, type Lang } from "@/content";


const BASE = "https://optona.tr";

export function pageMetadata(lang: Lang): Metadata {
  const d = dict[lang];
  const path = lang === "tr" ? "/" : "/en/";
  return {
    metadataBase: new URL(BASE),
    title: d.meta.title,
    description: d.meta.description,
    applicationName: "Optona",
    category: "technology",
    keywords:
      lang === "tr"
        ? ["yapay zekâ ajanı", "yapay zeka otomasyon", "AI ajan", "fatura okuma", "belge işleme", "kurumsal yapay zeka", "LLM entegrasyonu", "şirket içi asistan"]
        : ["AI agents", "AI automation", "document processing", "LLM integration", "enterprise AI assistant", "Turkey"],
    formatDetection: { telephone: false, email: false, address: false },
    alternates: {
      canonical: path,
      languages: { "tr-TR": "/", "en-US": "/en/", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: `${BASE}${path}`,
      siteName: "Optona",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      title: d.meta.title,
      description: d.meta.description,
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c0d0b",
  width: "device-width",
  initialScale: 1,
};

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
