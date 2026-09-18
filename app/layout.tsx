import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ViewingDialog } from "@/components/ViewingDialog";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: { default: "NIVĀRA — Considered residences across India", template: "%s — NIVĀRA" },
  description: siteConfig.description,
  openGraph: {
    title: "NIVĀRA Developments",
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/generated/nivara-hero.png", width: 2048, height: 1024, alt: "NIVĀRA conceptual residence" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.websiteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
  };

  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <ViewingDialog />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      </body>
    </html>
  );
}
