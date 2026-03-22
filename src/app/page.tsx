import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  title: "Dijital Dönüşümünüzün Güvenilir Ortağı",
  description:
    "Optona ile web, mobil, bulut ve veri odaklı çözümlerle dijital dönüşüm sürecinizi hızlandırın.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Optona | Dijital Dönüşümünüzün Güvenilir Ortağı",
    description:
      "Optona ile web, mobil, bulut ve veri odaklı çözümlerle dijital dönüşüm sürecinizi hızlandırın.",
    url: "https://optona.tr/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}

