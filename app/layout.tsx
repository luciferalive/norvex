export const metadata: Metadata = {
  metadataBase: new URL("https://norvex-tawny.vercel.app"),

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
      "Your trusted partner for global sourcing, industrial procurement, OEM sourcing, and supply chain solutions.",

    url: "https://norvex-tawny.vercel.app",
    siteName: "NORVEX",
    type: "website",
    locale: "en_US",

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
    title: "NORVEX | Global Procurement & Industrial Solutions",
    description:
      "Global Procurement, OEM Sourcing & Industrial Supply Solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};