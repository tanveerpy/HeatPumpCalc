import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heat Pump Cost Calculator 2026 | Installation & Savings Estimator",
  description: "Calculate accurate heat pump installation costs and annual savings. Compare Air Source vs Geothermal, and see your ROI with 2026 tax credits.",
  verification: {
    google: "yiTVCtyuAqdVZ1xKLWArR1Ax1gkffX00CPwKiJlyZ-s",
  },
};

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>

        <Header />

        <div id="main-content" className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
