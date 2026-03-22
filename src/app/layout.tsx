import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://optona.tr"),
  title: {
    default: "Optona | Dijital Dönüşüm ve Yazılım Çözümleri",
    template: "%s | Optona",
  },
  description:
    "Optona, işletmenizi dijital dünyada büyütmek için yenilikçi yazılım, bulut ve teknoloji çözümleri sunar.",
  applicationName: "Optona",
  keywords: [
    "dijital dönüşüm",
    "yazılım geliştirme",
    "next.js",
    "mobil uygulama",
    "bulut çözümleri",
    "siber güvenlik",
    "veri analitiği",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://optona.tr",
    siteName: "Optona",
    title: "Optona | Dijital Dönüşüm ve Yazılım Çözümleri",
    description:
      "Optona, işletmenizi dijital dünyada büyütmek için yenilikçi yazılım, bulut ve teknoloji çözümleri sunar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optona | Dijital Dönüşüm ve Yazılım Çözümleri",
    description:
      "Optona, işletmenizi dijital dünyada büyütmek için yenilikçi yazılım, bulut ve teknoloji çözümleri sunar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
