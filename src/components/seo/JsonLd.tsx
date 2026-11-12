import { company, siteMetadata } from "@/config/company";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "SoftwareApplication" | "Service" | "FAQPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export function JsonLd({ type = "Organization", data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteMetadata.siteUrl}/#organization`,
      name: company.legalName,
      alternateName: company.companyName,
      url: siteMetadata.siteUrl,
      logo: `${siteMetadata.siteUrl}/nuevo-logo-breicorp.webp`,
      description:
        "Software empresarial, automatización y servicios profesionales en finanzas, consultoría, contabilidad y gestión para empresas en Perú.",
      foundingDate: `${company.foundationYear}`,
      taxID: company.ruc,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.location.streetAddress,
        addressLocality: company.location.addressLocality,
        addressRegion: company.location.addressRegion,
        addressCountry: company.location.addressCountry,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "sales and customer service",
        areaServed: "PE",
        availableLanguage: ["Spanish"],
      },
      sameAs: Object.values(company.socialLinks).filter(Boolean),
    };
  } else if (type === "LocalBusiness") {
    schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteMetadata.siteUrl}/#organization`,
      name: company.legalName,
      alternateName: company.companyName,
      url: siteMetadata.siteUrl,
      telephone: company.phone,
      email: company.contactEmail,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.location.streetAddress,
        addressLocality: company.location.addressLocality,
        addressRegion: company.location.addressRegion,
        addressCountry: company.location.addressCountry,
      },
      sameAs: Object.values(company.socialLinks).filter(Boolean),
    };
  } else if (type === "SoftwareApplication") {
    schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BREICORP ERP Cloud",
      operatingSystem: "Web Browser, Android, iOS",
      applicationCategory: "BusinessApplication",
      downloadUrl: [company.appLinks.playStore, company.appLinks.appStore],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PEN",
        lowPrice: "50.00",
        highPrice: "150.00",
      },
      featureList: [
        "Facturación electrónica para empresas peruanas",
        "Control de inventario físico y valorizado (Kardex)",
        "Guías de remisión electrónicas remitente y transportista",
        "Punto de venta multi-caja y multi-almacén",
        "Reportes gerenciales y de rentabilidad en tiempo real",
      ],
    };
  } else if (type === "Service") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        "@id": `${siteMetadata.siteUrl}/#organization`,
        name: company.legalName,
      },
    };
  }

  const finalSchema = data ? { ...schema, ...data } : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
