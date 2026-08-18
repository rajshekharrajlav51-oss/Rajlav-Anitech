import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, portfolioItems, site } from '../site-data'

export const metadata = {
  title: 'Portfolio and Case Studies',
  description: 'Rajlav Technologies portfolio across EdTech, healthcare software, FinTech CRM, AI automation, payment systems and workflow reporting.',
  alternates: { canonical: absoluteUrl('/portfolio') },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: absoluteUrl('/portfolio') },
  ],
}

export default function PortfolioPage() {
  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="section-title">Rajlav Technologies Portfolio</h1>
      <p className="section-lead">
        Explore selected case-study concepts showing how Rajlav Technologies approaches AI, custom software, web applications, SaaS platforms and business automation.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <article className="premium-card overflow-hidden" key={item.slug}>
            <Image src={item.image} alt={item.alt} width={640} height={400} loading="lazy" className="mb-4 rounded-md border border-white/10" />
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.industry}</p>
            <h2 className="mt-2 text-xl font-bold text-white">{item.title}</h2>
            <p className="mt-1 text-sm font-semibold text-gray-200">{item.category}</p>
            <p className="mt-3 text-sm leading-6 text-gray-300">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.services.map((service) => (
                <Link href={`/services/${service}`} className="rounded-full border border-primary/25 px-3 py-1 text-xs text-primary" key={service}>
                  {service.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
            <Link href={`/portfolio/${item.slug}`} className="mt-5 inline-block text-sm font-semibold text-primary">
              Read case study
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
