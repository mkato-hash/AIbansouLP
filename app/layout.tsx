import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "AI伴走パートナー｜経営者のAI体験・スタッフ研修・業務改善を支援";
const description =
  "AI伴走パートナーは、経営者向けAI体験、スタッフ向けAI活用習得、AIによる業務改善・自動化を支援します。実際の仕事を題材に、御社に合った段階から伴走します。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ja_JP",
      images: [{ url: image, width: 1200, height: 630, alt: "AI伴走パートナー" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
