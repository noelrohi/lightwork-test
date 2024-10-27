import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
      <body className={`${fontSans.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
