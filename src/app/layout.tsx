import React from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/utils';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const baseUrl = 'https://vsssalesco.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_CONFIG.name} — Smart Digital Locks & Security Systems in Faridabad`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Faridabad's trusted provider of smart digital locks, CCTV security systems, home automation, and premium home theater solutions since 2010. Serving homes & offices across Delhi NCR.",
  keywords: [
    'smart digital locks Faridabad',
    'security systems Faridabad',
    'smart home automation Faridabad',
    'home automation Delhi NCR',
    'CCTV installation Faridabad',
    'security systems Haryana',
    'home theater installation Delhi',
    'smart locks Delhi NCR',
    'gate automation Faridabad',
    'EPABX systems Delhi',
    'CCTV camera Faridabad',
    'video door phone Faridabad',
    'home security Faridabad',
    'VSS Salesco',
  ],
  authors: [{ name: SITE_CONFIG.name, url: baseUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Smart Digital Locks & Security Systems in Faridabad`,
    description: "Faridabad's trusted provider of smart digital locks, CCTV security, home automation & home theater solutions since 2010. Serving Delhi NCR.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'VSS Salesco — Smart Digital Locks & Security Systems in Faridabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Smart Digital Locks & Security Systems`,
    description: "Faridabad's trusted provider of smart digital locks, CCTV security, home automation & home theater solutions since 2010.",
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
  foundingDate: '2010',
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
  areaServed: ['Faridabad', 'Gurugram', 'Delhi', 'Noida', 'Greater Noida'],
  serviceType: ['Smart Digital Locks', 'CCTV Security Systems', 'Home Automation', 'Home Theater', 'Gate Automation', 'Video Door Phones'],
  sameAs: [SITE_CONFIG.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
