import type { Metadata } from "next";
import IndustriesPageContent from "@/components/pages/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Sektörler – Optona",
  description: "Optona olarak finans, perakende, sağlık, üretim ve daha pek çok sektöre özel dijital çözümler sunuyoruz.",
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}

