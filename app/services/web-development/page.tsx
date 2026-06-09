import Image from 'next/image'

export const metadata = {
  title: 'Web Development — Rajlav Anitech',
  description: 'Robust web development: Jamstack, React, Next.js, APIs, performance, accessibility, and SEO-first architecture.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services/web-development' },
  openGraph: { url: 'https://www.rajlav-anitech.com/services/web-development' },
  twitter: { card: 'summary_large_image' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Web Development',
  'description': 'Modern web engineering with performance, accessibility, SEO, and scalable architectures using React, Next.js and Jamstack.',
  'provider': { '@type': 'Organization', 'name': 'Rajlav Anitech', 'url': 'https://www.rajlav-anitech.com' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Do you build SEO-friendly sites?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — we design site structure, metadata, sitemaps, structured data and server rendering to maximize search visibility.' } },
    { '@type': 'Question', 'name': 'Which stacks do you prefer?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We prefer React and Next.js for production web apps, combining Tailwind CSS and modern image/asset optimizations.' } }
  ]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' },
    { '@type': 'ListItem', 'position': 3, 'name': 'Web Development', 'item': 'https://www.rajlav-anitech.com/services/web-development' }
  ]
}

export default function WebDevelopmentPage() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Web Development Services</h1>
          <p className="mt-4 text-gray-300">We build performant, accessible and SEO-friendly web applications using modern frontend and backend tooling. Our focus is measurable results: faster load times, higher conversion rates, and maintainable codebases.</p>

          <article className="prose prose-invert mt-6 max-w-none">
            <p>
              High-quality web development is a combination of architecture, performance engineering, accessibility, and developer ergonomics. Our engineers design pages and APIs that scale: server rendering for fast Time to First Byte (TTFB), edge caching for geographic performance, and component-level optimizations to minimize bundle size and hydration cost. We use Next.js as our primary framework because it offers the flexibility to mix static rendering, server rendering, and edge functions while providing first-class SEO and image optimization.
            </p>

            <h3>Performance and Core Web Vitals</h3>
            <p>
              We obsess over Core Web Vitals: Largest Contentful Paint (LCP), First Input Delay (FID) and Cumulative Layout Shift (CLS). Performance techniques we use include critical CSS, prioritized fonts, lazy-loading offscreen images, resource hints, and modern image formats. We measure and track metrics in staging and production to ensure continuous improvement.
            </p>

            <h3>Accessibility & Inclusive Design</h3>
            <p>
              Accessibility is not optional. We build with semantic HTML, proper ARIA attributes, keyboard navigation and color contrast checks. Inclusive design broadens your market and reduces legal and usability risk.
            </p>

            <h3>SEO-first architecture</h3>
            <p>
              Search visibility starts with structure. We implement descriptive metadata, canonical tags, sitemap generation, robots directives and structured data (JSON-LD) for organization, breadcrumbs, products and articles. We also partner with content teams to improve content quality and indexing.
            </p>

            <h3>Backend & APIs</h3>
            <p>
              Our backend integrations include REST and GraphQL APIs, serverless functions, and headless CMS integrations. We design API contracts for performance, caching, and secure authentication. For large-scale traffic, we advise on CDNs, edge computing, and read/write separation strategies.
            </p>

            <h3>Testing, security & compliance</h3>
            <p>
              Quality is enforced through automated testing (unit, integration, E2E), dependency scanning, and secure coding practices. We run threat modeling and static analysis as part of CI. When required we help teams meet compliance needs such as GDPR and data residency by designing appropriate data flows and consent mechanisms.
            </p>

            <h3>Migrations & modernization</h3>
            <p>
              We help organizations modernize legacy web stacks incrementally: carve out components as micro-frontends, migrate to server-side rendering, and introduce progressive hydration. Our migration plans minimize risk and maintain SEO and availability during transitions.
            </p>

            <h3>Case studies & outcomes</h3>
            <p>
              Typical outcomes we drive include 30–60% LCP improvements, measurable uplifts in organic traffic due to improved indexing and content structure, and reduced operational costs through CDN and edge caching strategies. We deliver both engineering artifacts and the measurable KPIs needed to prove ROI.
            </p>

            <h3>Developer experience</h3>
            <p>
              We prioritize developer velocity: clear repo structure, type-safe APIs (TypeScript), linting, testing and CI automation. Deliverables include architecture diagrams, deployment scripts, and runbooks for maintenance.
            </p>

            <p>
              Whether you need a single-page product landing optimized for conversions, a content-driven platform with heavy SEO demands, or a complex web application with real-time features, our team provides pragmatic engineering that aligns with your product and business goals.
            </p>
          </article>
        </div>
        <div>
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%230e1620\"/></svg>'} alt="Web development" width={640} height={400} />
        </div>
      </div>
    </section>
  )
}
