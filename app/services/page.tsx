import Link from 'next/link'
import { absoluteUrl, servicePages, site } from '../site-data'

export const metadata = {
  title: 'Services',
  description: 'AI development, custom software, web development, mobile app development, SaaS development and business automation services from Rajlav Technologies.',
  alternates: { canonical: absoluteUrl('/services') },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
    { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
  ],
}

export default function ServicesIndex() {
  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="section-title">AI, Software, Web, Mobile and Automation Services</h1>
      <p className="section-lead">
        Rajlav Technologies serves businesses in Noida, Delhi NCR and beyond with focused technology services for product development, internal operations and digital growth.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((service) => (
          <article className="premium-card" key={service.slug}>
            <h2 className="text-xl font-bold text-white">{service.navTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{service.summary}</p>
            <Link href={`/services/${service.slug}`} className="mt-5 inline-block text-sm font-semibold text-primary">
              Explore {service.navTitle} Services
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
