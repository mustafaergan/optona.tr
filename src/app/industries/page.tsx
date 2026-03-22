import type { Metadata } from "next";
import IndustriesPageContent from "@/components/pages/IndustriesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sektörler",
  description: "Optona olarak finans, perakende, sağlık, üretim ve daha pek çok sektöre özel dijital çözümler sunuyoruz.",
  path: "/industries",
  keywords: ["finans teknolojileri", "sağlık yazılımı", "üretim yazılımı", "sektörel çözümler"],
});

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}

