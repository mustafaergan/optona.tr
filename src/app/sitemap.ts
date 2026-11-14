import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "tr-TR": "https://optona.tr/", "en-US": "https://optona.tr/en/" };
  return [
    { url: "https://optona.tr/", changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: "https://optona.tr/en/", changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
