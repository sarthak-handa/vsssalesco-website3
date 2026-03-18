import React from "react";
import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/utils';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const baseUrl = 'https://vsssalesco.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_CONFIG.name} — Smart Home Automation & Security Solutions, Faridabad`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'smart home automation Faridabad',
    'home automation Delhi NCR',
    'CCTV installation Faridabad',
    'security systems Haryana',
    'home theater installation Delhi',
    'smart locks Delhi NCR',
    'gate automation Faridabad',
    'EPABX systems Delhi',
    'VSS Salesco',
    'Vision Security Solution',
  ],
  authors: [{ name: SITE_CONFIG.name, url: baseUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Smart Home Automation & Security`,
    description: SITE_CONFIG.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VSS Salesco' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Smart Home Automation & Security`,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  alternates: { canonical: baseUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: '/logo.png', apple: '/logo.png' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: baseUrl,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 87',
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121002',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 28.3534, longitude: 77.3410 },
  openingHours: 'Mo-Sa 09:00-19:00',
  priceRange: '₹₹₹',
  areaServed: ['Faridabad', 'Gurugram', 'Delhi', 'Noida'],
  serviceType: ['Home Automation', 'Security Systems', 'Home Theater', 'CCTV', 'Smart Locks', 'Gate Automation'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
