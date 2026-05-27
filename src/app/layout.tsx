import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.comeyogawithmary.com";

export const metadata: Metadata = {
  title: "Mary Duffy | Burnout Recovery for High-Functioning People",
  description:
    "Evidence-based burnout recovery guidance from Mary Duffy, a qualified organisational psychologist and certified yoga teacher.",
  keywords: [
    "Mary Duffy",
    "burnout recovery",
    "organisational psychology",
    "workplace wellbeing",
    "stress recovery",
    "high-functioning burnout",
    "mind body recovery",
    "embodied leadership",
  ],
  authors: [{ name: "Mary Duffy" }],
  creator: "Mary Duffy",
  publisher: "Mary Duffy",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Mary Duffy | For people who are good at coping, but not recovering",
    description:
      "Organisational psychology and embodied recovery tools for high-functioning professionals navigating burnout, stress, and healthier work.",
    url: "/",
    siteName: "Mary Duffy",
    images: [
      {
        url: "/images/get-to-know.webp",
        width: 1200,
        height: 900,
        alt: "Mary Duffy practising yoga outdoors at sunrise",
      },
    ],
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Duffy | Burnout Recovery for High-Functioning People",
    description:
      "Evidence-based burnout recovery guidance from organisational psychology and yoga.",
    images: ["/images/get-to-know.webp"],
    creator: "@come_yogawithmary",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mary Duffy",
  url: siteUrl,
  jobTitle: "Organisational Psychologist and Yoga Teacher",
  description:
    "Mary Duffy shares evidence-based burnout recovery guidance for high-functioning professionals.",
  image: `${siteUrl}/images/get-to-know.webp`,
  sameAs: [
    "https://instagram.com/come_yogawithmary",
    "https://www.tiktok.com/@come_yogawithmary",
    "https://www.linkedin.com/in/mary-duffy-295832127/",
  ],
  knowsAbout: [
    "Burnout recovery",
    "Organisational psychology",
    "Workplace wellbeing",
    "Yoga",
    "Embodied leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
