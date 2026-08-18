import Link from 'next/link'
import { absoluteUrl, portfolioItems, servicePages, site } from '../site-data'

export function findService(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

export function serviceMetadata(slug: string) {
  const service = findService(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.meta,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.meta,
      url: absoluteUrl(`/services/${service.slug}`),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${site.name}`,
      description: service.meta,
    },
  }
}

export function ServicePage({ slug }: { slug: string }) {
  const service = findService(slug)

  if (!service) {
    return (
      <section className="container section-space">
        <h1 className="section-title">Service Not Found</h1>
        <p className="section-lead">The requested service page is not available.</p>
      </section>
    )
  }

  const related = portfolioItems.filter((item) => service.relatedPortfolio.includes(item.slug))
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.navTitle,
    description: service.meta,
    provider: { '@type': 'Organization', name: site.name, url: site.domain },
    areaServed: site.serviceArea,
    serviceType: service.navTitle,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Does ${site.name} provide ${service.navTitle.toLowerCase()}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. ${service.summary}` },
      },
      {
        '@type': 'Question',
        name: `Can ${service.navTitle.toLowerCase()} projects be delivered for businesses outside Noida?`,
        acceptedAnswer: { '@type': 'Answer', text: `${site.name} serves Noida, Delhi NCR and remote clients across India and abroad.` },
      },
    ],
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
      { '@type': 'ListItem', position: 3, name: service.navTitle, item: absoluteUrl(`/services/${service.slug}`) },
    ],
  }

  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{site.name}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white">{service.title}</h1>
      <p className="section-lead">{service.summary}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <article className="premium-card lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">How We Help</h2>
          <div className="mt-5 space-y-5 text-gray-300">
            {service.sections.map((section) => (
              <p className="leading-7" key={section}>{section}</p>
            ))}
          </div>
        </article>
        <aside className="premium-card">
          <h2 className="text-xl font-bold text-white">Service Area</h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">Noida, Delhi NCR, Uttar Pradesh, India and remote delivery for selected clients.</p>
          <h2 className="mt-8 text-xl font-bold text-white">Discuss Your Project</h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">Share your requirements and we will help shape a practical next step.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-semibold text-black shadow-gold">
            Get Free Consultation
          </Link>
        </aside>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Relevant Case Studies</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {related.map((item) => (
            <Link href={`/portfolio/${item.slug}`} className="premium-card block" key={item.slug}>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.category}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <details className="premium-card">
            <summary className="cursor-pointer font-semibold text-white">Does {site.name} provide {service.navTitle.toLowerCase()}?</summary>
            <p className="mt-3 text-sm leading-6 text-gray-300">Yes. {service.summary}</p>
          </details>
          <details className="premium-card">
            <summary className="cursor-pointer font-semibold text-white">Do you serve businesses outside Noida?</summary>
            <p className="mt-3 text-sm leading-6 text-gray-300">{site.name} serves businesses in Noida, Delhi NCR, Uttar Pradesh and remote clients across India and abroad.</p>
          </details>
        </div>
      </section>
    </section>
  )
}
