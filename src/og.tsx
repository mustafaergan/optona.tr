import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { dict, type Lang } from "@/content";

export const ogSize = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans");

export async function ogImage(lang: Lang) {
  const d = dict[lang];
  const [semi, regular] = await Promise.all([
    readFile(join(fontDir, "Geist-SemiBold.ttf")),
    readFile(join(fontDir, "Geist-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0c0d0b",
          backgroundImage: "radial-gradient(circle at 85% 30%, rgba(255,90,31,0.35), transparent 45%)",
          color: "#f1efe8",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 600 }}>
          <div style={{ width: 38, height: 38, borderRadius: 999, border: "9px solid #ff5a1f" }} />
          optona
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3 }}>{d.hero.h1a}</div>
          <div style={{ fontSize: 84, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3, color: "#ff5a1f" }}>
            {d.hero.h1b}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#a3a59b", fontWeight: 400 }}>{d.hero.fact}</div>
        </div>
        <div style={{ fontSize: 26, color: "#a3a59b" }}>optona.tr</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: semi, weight: 600 },
        { name: "Geist", data: regular, weight: 400 },
      ],
    },
  );
}
