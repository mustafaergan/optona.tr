import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Hizmetler – Optona",
  description: "Optona'nın sunduğu dijital hizmetler: Web geliştirme, mobil uygulama, bulut çözümleri ve daha fazlası.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
