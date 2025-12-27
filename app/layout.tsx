import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.professionalName }],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: 'https://www.nutripostpartum.ro', // Înlocuiește cu URL-ul tău
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brandName,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
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
    google: 'your-google-verification-code', // Adaugă codul de verificare Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": siteConfig.brandName,
              "description": siteConfig.seo.description,
              "url": "https://www.nutripostpartum.ro",
              "telephone": siteConfig.contact.phone,
              "email": siteConfig.contact.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": siteConfig.contact.address,
                "addressCountry": "RO"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "image": siteConfig.seo.ogImage
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
