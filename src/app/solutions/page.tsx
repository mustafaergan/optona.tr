import type { Metadata } from "next";
import SolutionsPageContent from "@/components/pages/SolutionsPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Çözümler",
  description: "Optona'nın sunduğu iş çözümleri: ERP, CRM, IoT, e-ticaret ve daha fazlası.",
  path: "/solutions",
  keywords: ["erp", "crm", "iot", "e-ticaret", "iş çözümleri"],
});

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}