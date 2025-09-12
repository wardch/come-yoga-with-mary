import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Analytics} from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Candle Yoga in Clontarf — Mondays at St. Anthony's Hall",
  description:
    'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
  keywords: [
    'yoga clontarf',
    'candle yoga dublin',
    'vinyasa flow dublin',
    'yoga classes clontarf',
    'evening yoga dublin',
    'candlelit yoga',
    'st anthonys hall yoga',
    'mary duffy yoga',
    'yoga instructor dublin',
    'mindfulness yoga dublin',
  ],
  authors: [{name: 'Mary Duffy'}],
  creator: 'Mary Duffy',
  publisher: 'Candle Yoga',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: "Candle Yoga in Clontarf — Mondays at St. Anthony's Hall",
    description:
      'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
    url: '/',
    siteName: 'Candle Yoga',
    images: [
      {
        url: '/images/yoga-field.webp',
        width: 1200,
        height: 630,
        alt: "Candle Yoga in Clontarf at St. Anthony's Hall",
      },
    ],
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Candle Yoga in Clontarf — Mondays at St. Anthony's Hall",
    description:
      'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
    images: ['/images/yoga-field.webp'],
    creator: '@come_yogawithmary',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Candle Yoga',
  description:
    'All-levels candlelit vinyasa flow yoga classes in Clontarf, Dublin',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  telephone: '+353-1-123-4567',
  email: 'charlieward18@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "St. Anthony's Hall, Clontarf Rd",
    addressLocality: 'Dublin',
    addressRegion: 'Dublin',
    postalCode: 'D03 TY23',
    addressCountry: 'IE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.3656',
    longitude: '-6.2018',
  },
  openingHours: 'Mo 19:45-20:45',
  priceRange: '€',
  image: '/images/yoga-field.webp',
  sameAs: [
    'https://instagram.com/come_yogawithmary',
    'https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl',
  ],
  founder: {
    '@type': 'Person',
    name: 'Mary Duffy',
    jobTitle: 'Yoga Instructor',
    description:
      'Certified yoga instructor trained in Goa, India and chartered psychologist',
  },
  offers: {
    '@type': 'Offer',
    name: 'Candle Yoga Class',
    description: 'Weekly candlelit vinyasa flow yoga class',
    price: '15',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-09-29',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head>
        <link
          rel="preload"
          href="/_next/static/media/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
