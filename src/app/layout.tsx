'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tashia Burris - Tobago to the World | Communications Specialist & Global Thinker",
  description: "Tashia Burris is a dynamic communications specialist, skilled orator, and global thinker from Tobago. Dedicated to youth development, mediation, and advancing Tobago's presence on the world stage.",
  keywords: ["Tashia Burris", "Tobago", "communications specialist", "orator", "THA", "youth development", "mediation", "orange economy", "Caribbean", "Trinidad and Tobago"],
  authors: [{ name: "Tashia Burris" }],
  creator: "Tashia Burris",
  publisher: "Tashia Burris Portfolio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tashia-burris.com",
    title: "Tashia Burris - Tobago to the World",
    description: "Dynamic communications specialist, skilled orator, and global thinker from Tobago. Committed to service and advancing Tobago's presence worldwide.",
    siteName: "Tashia Burris Portfolio",
    images: [
      {
        url: "/Tashia_In_Hoddie.jpg",
        width: 1200,
        height: 630,
        alt: "Tashia Burris - Professional Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tashia Burris - Tobago to the World",
    description: "Dynamic communications specialist, skilled orator, and global thinker from Tobago. Committed to service and advancing Tobago's presence worldwide.",
    images: ["/Tashia_In_Hoddie.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
