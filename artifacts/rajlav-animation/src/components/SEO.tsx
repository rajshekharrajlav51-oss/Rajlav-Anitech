import { Helmet } from "react-helmet-async";
import { faqs, services, site, url } from "@/lib/seo-data";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  pageType?: "website" | "service" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noFaqSchema?: boolean;
}

export function SEO({
  title = "Rajlav Technologies | AI & Software Development Company in Noida",
  description = site.description,
  canonical = url("/"),
  keywords = "Rajlav Technologies, Rajlav Anitech, AI development company in Noida, software development company in Noida, web development company in Noida, mobile app development company in Noida, SaaS development company",
  pageType = "website",
  schema,
  noFaqSchema = true,
}: SEOProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.alternateName,
    url: site.domain,
    logo: url("/favicon.png"),
    description: site.description,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.linkedIn],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.alternateName,
    image: url("/opengraph.jpg"),
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: ["Noida", "Delhi NCR", "Uttar Pradesh", "India"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: site.domain,
    name: site.name,
    alternateName: site.alternateName,
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI and Software Development",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    areaServed: ["Noida", "Delhi NCR", "Uttar Pradesh", "India"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rajlav Technologies Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.navTitle,
          url: url(`/services/${service.slug}`),
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const extraSchemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const schemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    serviceCatalogSchema,
    ...(!noFaqSchema ? [faqSchema] : []),
    ...extraSchemas,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={url("/opengraph.jpg")} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url("/opengraph.jpg")} />

      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
}
