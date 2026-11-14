import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0c0d0b" }}>
        <div style={{ width: 84, height: 84, borderRadius: 999, border: "22px solid #ff5a1f" }} />
      </div>
    ),
    size,
  );
}
