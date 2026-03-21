import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://optona.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/index",
    "/services",
    "/solutions",
    "/industries",
    "/success-stories",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
