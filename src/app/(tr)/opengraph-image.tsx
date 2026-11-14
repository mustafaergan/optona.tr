import { ogImage, ogSize } from "@/og";

export const dynamic = "force-static";
export const alt = "Optona: Şirketler için yapay zekâ ajanları";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage("tr");
}
