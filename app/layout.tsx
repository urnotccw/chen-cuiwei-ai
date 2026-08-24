import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈萃薇 · AI 产品经理作品集",
  description: "陈萃薇的 AI 产品经理作品集，2026。",
  openGraph: {
    title: "陈萃薇 · AI 产品经理",
    description: "AI 产品经理作品集，2026。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
