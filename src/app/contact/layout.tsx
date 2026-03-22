import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim",
  description: "Optona ile iletişime geçin. Projeniz için ücretsiz danışmanlık alın.",
  path: "/contact",
  keywords: ["iletişim", "ücretsiz danışmanlık", "proje teklifi"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
