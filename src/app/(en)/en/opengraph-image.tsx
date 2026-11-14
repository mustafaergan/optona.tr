import { ogImage, ogSize } from "@/og";

export const dynamic = "force-static";
export const alt = "Optona: AI agents for companies";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage("en");
}
