import type { Metadata } from "next";
import SolutionsPageContent from "@/components/pages/SolutionsPageContent";

export const metadata: Metadata = {
  title: "Çözümler – Optona",
  description: "Optona'nın sunduğu iş çözümleri: ERP, CRM, IoT, e-ticaret ve daha fazlası.",
};

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}