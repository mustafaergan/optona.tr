import type { Metadata } from "next";
import SuccessStoriesPageContent from "@/components/pages/SuccessStoriesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Başarı Hikayeleri",
  description: "Optona müşterilerinin dijital dönüşüm yolculuklarını ve elde ettikleri sonuçları keşfedin.",
  path: "/success-stories",
  keywords: ["başarı hikayeleri", "vaka çalışması", "dijital dönüşüm sonuçları"],
});

export default function CaseStudiesPage() {
  return <SuccessStoriesPageContent />;
}

