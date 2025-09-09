import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Candle Yoga in Clontarf — Mondays at St. Anthony’s Hall',
  description:
    'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    title: 'Candle Yoga in Clontarf — Mondays at St. Anthony’s Hall',
    description:
      'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
    url: '/',
    siteName: 'Candle Yoga',
    images: [
      {
        url: '/images/yoga-field.webp',
        width: 1200,
        height: 630,
        alt: 'Candle Yoga in Clontarf at St. Anthony’s Hall',
      },
    ],
    locale: 'en_IE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Candle Yoga in Clontarf — Mondays at St. Anthony’s Hall',
    description:
      'All-levels candlelit vinyasa flow in a beautifully repurposed church space. Mondays 7:45–8:45pm. Six-week series starting 29 Sep 2025.',
    images: ['/images/yoga-field.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
