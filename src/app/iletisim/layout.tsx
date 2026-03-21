import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim – Optona",
  description: "Optona ile iletişime geçin. Projeniz için ücretsiz danışmanlık alın.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
