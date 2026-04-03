import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A1 Tradelines | Premium Authorized User Tradelines",
  description:
    "Boost your credit score with premium authorized user tradelines. A1 Tradelines offers verified, high-limit tradelines with fast reporting. 500+ clients served. BBB Accredited.",
  keywords:
    "tradelines, authorized user tradelines, boost credit score, buy tradelines, credit repair, credit building",
  openGraph: {
    title: "A1 Tradelines | Premium Authorized User Tradelines",
    description:
      "Boost your credit score with premium authorized user tradelines from A1 Tradelines.",
    type: "website",
    url: "https://www.a1tradelines.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-100 antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
