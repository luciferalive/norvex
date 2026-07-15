import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://norvex-tawny.vercel.app"),

  title: {
    default: "NORVEX | Global Procurement & Strategic Sourcing",
    template: "%s | NORVEX",
  },

  description:
    "NORVEX is a global procurement and strategic sourcing company delivering OEM products, industrial supplies, MRO materials, engineering equipment and end-to-end procurement solutions worldwide.",

  keywords: [
    "NORVEX",
    "Global Procurement",
    "Strategic Sourcing",
    "Industrial Procurement",
    "OEM Suppliers",
    "MRO Procurement",
    "Supply Chain",
    "Engineering Equipment",
    "Industrial Solutions",
    "Worldwide Procurement",
  ],

  authors: [{ name: "NORVEX" }],
  creator: "NORVEX",
  publisher: "NORVEX",

  openGraph: {
    title: "NORVEX | Global Procurement & Strategic Sourcing",
    description:
      "Delivering world-class procurement, sourcing and industrial supply solutions across Oil & Gas, Aviation, Marine, Manufacturing and Infrastructure.",
    url: "https://norvex-tawny.vercel.app",
    siteName: "NORVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NORVEX Global Procurement",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NORVEX | Global Procurement & Strategic Sourcing",
    description:
      "Worldwide Procurement • OEM Sourcing • Industrial Supply Solutions",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <CustomCursor />

        <ScrollProgress />

        {children}

        <FloatingWhatsApp />

        <GoogleAnalytics gaId="G-09NRSW5782" />
      </body>
    </html>
  );
}