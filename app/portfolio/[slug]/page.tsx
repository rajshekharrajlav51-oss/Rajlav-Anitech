import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { absoluteUrl, portfolioItems, servicePages, site } from '../../site-data'

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: PageProps) {
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === params.slug)

  if (!item) {
    return {}
  }

  return {
    title: `${item.title} Case Study`,
    description: `${item.category} case study by Rajlav Technologies for ${item.industry.toLowerCase()} workflows.`,
    alternates: { canonical: absoluteUrl(`/portfolio/${item.slug}`) },
    openGraph: {
      title: `${item.title} Case Study | ${site.name}`,
      description: item.description,
      url: absoluteUrl(`/portfolio/${item.slug}`),
      images: [{ url: absoluteUrl(item.image), alt: item.alt }],
    },
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const item = portfolioItems.find((portfolioItem) => portfolioItem.slug === params.slug)

  if (!item) {
    notFound()
  }

  const relatedServices = servicePages.filter((service) => item.services.includes(service.slug))
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: absoluteUrl('/portfolio') },
      { '@type': 'ListItem', position: 3, name: item.title, item: absoluteUrl(`/portfolio/${item.slug}`) },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What type of project is ${item.title}?`,
        acceptedAnswer: { '@type': 'Answer', text: `${item.title} is a ${item.category.toLowerCase()} concept for the ${item.industry.toLowerCase()} industry.` },
      },
      {
        '@type': 'Question',
        name: 'Can Rajlav Technologies build a similar product?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Rajlav Technologies can plan, design and develop similar custom software after reviewing your business requirements.' },
      },
    ],
  }

  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{item.category}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-white">{item.title}</h1>
      <p className="section-lead">{item.description}</p>

      <Image src={item.image} alt={item.alt} width={1200} height={720} priority className="mt-10 rounded-lg border border-white/10" />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="premium-card lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          <p className="mt-4 leading-7 text-gray-300">
            This case study shows how {site.name} would structure a {item.category.toLowerCase()} for a business that needs clearer workflows, better visibility and reliable software foundations.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-white">Client/Business Problem</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Teams in {item.industry.toLowerCase()} often struggle with disconnected tools, manual updates, limited reporting and inconsistent user experiences. The goal is to simplify daily work without inventing fake metrics or unsupported claims.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-white">Solution</h2>
          <p className="mt-4 leading-7 text-gray-300">
            The solution combines a focused product workflow, secure data handling, responsive interfaces and integrations that match the business process. The product can be delivered as web software, a mobile app, SaaS platform or automation layer depending on scope.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-white">Features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-white">Technology Used</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Typical technology choices include React, Next.js, Node.js, TypeScript, APIs, databases, analytics, cloud deployment and AI integrations where they fit the project.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-white">Business Impact</h2>
          <p className="mt-4 leading-7 text-gray-300">
            A well-built platform can improve workflow visibility, reduce repeated manual work, make reporting easier and give teams a stronger base for future digital growth.
          </p>
        </article>

        <aside className="premium-card">
          <h2 className="text-xl font-bold text-white">Industry</h2>
          <p className="mt-2 text-gray-300">{item.industry}</p>
          <h2 className="mt-8 text-xl font-bold text-white">Related Services</h2>
          <ul className="mt-3 space-y-2">
            {relatedServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-primary">{service.navTitle}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-8 inline-block rounded-md bg-primary px-5 py-3 font-semibold text-black shadow-gold">
            Start Your Project
          </Link>
        </aside>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <details className="premium-card">
            <summary className="cursor-pointer font-semibold text-white">What type of project is {item.title}?</summary>
            <p className="mt-3 text-sm leading-6 text-gray-300">{item.title} is a {item.category.toLowerCase()} concept for {item.industry.toLowerCase()} workflows.</p>
          </details>
          <details className="premium-card">
            <summary className="cursor-pointer font-semibold text-white">Can Rajlav Technologies build a similar product?</summary>
            <p className="mt-3 text-sm leading-6 text-gray-300">Yes. We can plan, design and develop similar custom software after reviewing your requirements.</p>
          </details>
        </div>
      </section>
    </section>
  )
}
