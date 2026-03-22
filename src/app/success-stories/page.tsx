import type { Metadata } from "next";
import SuccessStoriesPageContent from "@/components/pages/SuccessStoriesPageContent";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri – Optona",
  description: "Optona müşterilerinin dijital dönüşüm yolculuklarını ve elde ettikleri sonuçları keşfedin.",
};

export default function CaseStudiesPage() {
  return <SuccessStoriesPageContent />;
}

