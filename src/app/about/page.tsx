import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hakkımızda",
  description: "Optona'nın hikayesini, misyonunu, vizyonunu ve uzman ekibini keşfedin.",
  path: "/about",
  keywords: ["optona hakkında", "dijital dönüşüm şirketi", "uzman ekip"],
});

export default function AboutPage() {
  return <AboutPageContent />;
}

