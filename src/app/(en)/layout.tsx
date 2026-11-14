import "../globals.css";
import { Shell, pageMetadata } from "@/shell";

export { viewport } from "@/shell";
export const metadata = pageMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
