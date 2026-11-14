import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = { "tr-TR": "https://optona.tr/", "en-US": "https://optona.tr/en/" };
  return [
    { url: "https://optona.tr/", lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: "https://optona.tr/en/", lastModified, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
