import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}

export function SEO({
  title = "Rajlav Technologies | AI & Software Development Company",
  description = "Top-tier AI Development, Web Development, Mobile App Development, and SaaS Development company. We build digital products for India, USA, UK, Canada, and Australia.",
  canonical = "https://anitech.rajlav.co.in",
  keywords = "AI Development Company, Software Development Company, Web Development Agency, Mobile App Development Company, SaaS Development Company",
}: SEOProps) {
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rajlav Technologies",
    "url": "https://anitech.rajlav.co.in",
    "logo": "https://anitech.rajlav.co.in/portfolio-ai-assistant.svg",
    "description": "Rajlav Technologies is a leading AI and Software Development company providing digital product development services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rajlav Technologies",
    "image": "https://anitech.rajlav.co.in/portfolio-ai-assistant.svg",
    "url": "https://anitech.rajlav.co.in",
    "priceRange": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "areaServed": ["India", "USA", "UK", "Canada", "Australia"]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://anitech.rajlav.co.in",
    "name": "Rajlav Technologies",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://anitech.rajlav.co.in/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Rajlav Technologies"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AI Development" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Web Development" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Mobile App Development" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SaaS Development" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "UI/UX Design" }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://anitech.rajlav.co.in/opengraph.jpg" />
      <meta property="og:site_name" content="Rajlav Technologies" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://anitech.rajlav.co.in/opengraph.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
}
