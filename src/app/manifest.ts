import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Optona",
    short_name: "Optona",
    description: "Şirketler için yapay zekâ ajanları ve otomasyon",
    start_url: "/",
    display: "browser",
    background_color: "#0c0d0b",
    theme_color: "#0c0d0b",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
