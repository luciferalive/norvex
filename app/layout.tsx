import { Inter } from "next/font/google";
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

const inter = Inter({
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NORVEX | Global Procurement & Industrial Solutions",
    template: "%s | NORVEX",
  },

  description:
    "NORVEX provides global procurement, OEM sourcing, industrial supplies, MRO products, and project procurement solutions for businesses worldwide.",

  keywords: [
    "Global Procurement",
    "Industrial Procurement",
    "OEM Sourcing",
    "MRO Supplies",
    "Industrial Equipment",
    "Supply Chain",
    "Engineering Products",
    "NORVEX",
  ],

  authors: [{ name: "NORVEX" }],
  creator: "NORVEX",
  publisher: "NORVEX",

  openGraph: {
    title: "NORVEX | Global Procurement & Industrial Solutions",

    description:
      "Your trusted partner for global sourcing, industrial procurement and supply chain solutions.",

    type: "website",
    locale: "en_US",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
