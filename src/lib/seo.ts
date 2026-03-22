import type { Metadata } from "next";

const BASE_URL = "https://optona.tr";

const HREFLANG_LANGUAGES = {
  "tr-TR": "tr",
  "en-US": "en",
  "de-DE": "de",
} as const;

function localizedUrl(path: string, lang: "tr" | "en" | "de") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const query = `?lang=${lang}`;
  return `${BASE_URL}${normalizedPath}${query}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const url = `${BASE_URL}${canonical}`;
  const languageAlternates = Object.fromEntries(
    Object.entries(HREFLANG_LANGUAGES).map(([locale, lang]) => [locale, localizedUrl(canonical, lang)])
  );

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        ...languageAlternates,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | Optona`,
      description,
      siteName: "Optona",
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Optona`,
      description,
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
      },
    },
  };
}
