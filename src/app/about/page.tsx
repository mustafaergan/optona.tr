import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About – Optona",
  description: "Optona company profile, mission, vision and team.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}

