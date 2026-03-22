import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hizmetler",
  description: "Optona'nın sunduğu dijital hizmetler: web geliştirme, mobil uygulama, bulut çözümleri ve daha fazlası.",
  path: "/services",
  keywords: ["web geliştirme", "mobil uygulama", "bulut çözümleri", "siber güvenlik"],
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
