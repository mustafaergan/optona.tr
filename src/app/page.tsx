import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dijital Dönüşümünüzün Güvenilir Ortağı",
  description:
    "Optona ile web, mobil, bulut ve veri odaklı çözümlerle dijital dönüşüm sürecinizi hızlandırın.",
  path: "/",
  keywords: ["dijital dönüşüm", "yazılım çözümleri", "web ve mobil geliştirme"],
});

export default function HomePage() {
  return <HomePageContent />;
}

