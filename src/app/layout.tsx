import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "LightWork",
  description:
    "LightWork is an AI-powered platform centralising property services and automating back-office operations, boosting efficiency for property managers.",
  openGraph: {
    type: "website",
    url: "https://lightwork-test.rohi.dev",
    images: "https://framerusercontent.com/assets/hS0ExQGFHFP5Klkcf3Bs2CShJo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
