import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.brandName,
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.description,
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
