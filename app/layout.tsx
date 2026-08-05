import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "我的名片页",
  description: "个人名片页 · 纸墨手账贴纸风",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={`${caveat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
