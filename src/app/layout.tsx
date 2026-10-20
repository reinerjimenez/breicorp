import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { siteMetadata, company, robotsPolicy } from "@/config/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: "BREICORP | Software Empresarial, Facturación SUNAT y ERP Cloud en Perú",
    template: "%s | BREICORP",
  },
  description:
    "Software empresarial en la nube para empresas peruanas. Facturación electrónica, control de inventario y Kardex, punto de venta y guías de remisión.",
  keywords: [
    "software empresarial peru",
    "facturación electrónica sunat",
    "sistema de ventas e inventario",
    "erp para mypes peru",
    "guías de remisión electrónicas gre",
    "software para distribuidoras tingo maria huanuco peru",
    "kardex valorizado sunat",
    "punto de venta pos peru",
  ],
  authors: [{ name: company.legalName }],
  creator: company.companyName,
  publisher: company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    title: "BREICORP | Software Empresarial, Facturación SUNAT y ERP Cloud",
    description:
      "Automatiza ventas, inventario multialmacén y facturación electrónica SUNAT con una plataforma rápida y segura en Perú.",
    url: siteMetadata.siteUrl,
    siteName: company.companyName,
    locale: siteMetadata.locale,
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        alt: "BREICORP — Software empresarial para empresas peruanas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BREICORP | Software Empresarial en Perú",
    description:
      "Plataforma empresarial en la nube: ventas, inventarios, Kardex y facturación electrónica SUNAT.",
    images: [siteMetadata.ogImage],
  },
  robots: robotsPolicy,
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: "/logo-breicorp.webp", type: "image/webp" },
    ],
    shortcut: ["/logo-breicorp.webp"],
    apple: [
      { url: "/logo-breicorp.webp", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_ID) &&
    (process.env.SITE_ENV === "production" || process.env.SITE_ENV === "staging");
  return (
    <html lang="es-PE">
      <head>
        <link rel="icon" href="/logo-breicorp.webp" type="image/webp" />
        <link rel="shortcut icon" href="/logo-breicorp.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logo-breicorp.webp" />
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col bg-slate-50 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-slate-900 antialiased selection:bg-orange-600 selection:text-white md:pb-0`}>
        <JsonLd type="Organization" />
        <JsonLd type="SoftwareApplication" />
        {analyticsEnabled ? <Analytics /> : null}
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}
