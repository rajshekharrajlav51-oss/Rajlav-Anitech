import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, faqs, portfolioItems, servicePages, site } from './site-data'

export const metadata = {
  title: 'Rajlav Technologies | AI & Software Development Company in Noida',
  description: site.description,
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: 'Rajlav Technologies | AI & Software Development Company',
    description: site.shortDescription,
    url: absoluteUrl('/'),
    siteName: site.name,
    images: [{ url: absoluteUrl('/opengraph.jpg'), width: 1200, height: 630, alt: 'Rajlav Technologies AI software development company' }],
  },
  twitter: {
    title: 'Rajlav Technologies | AI & Software Development Company',
    description: site.shortDescription,
    card: 'summary_large_image',
    images: [absoluteUrl('/opengraph.jpg')],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: site.alternateName,
  url: site.domain,
  logo: absoluteUrl('/favicon.png'),
  email: site.email,
  telephone: site.phone,
  sameAs: [site.linkedIn],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  alternateName: site.alternateName,
  url: site.domain,
  image: absoluteUrl('/opengraph.jpg'),
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: site.serviceArea,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  alternateName: site.alternateName,
  url: site.domain,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.domain }],
}

const h2Sections = [
  {
    title: 'Custom Software Development',
    body: 'Business applications, dashboards, CRMs, portals and internal systems designed around your exact workflow.',
    href: '/services/software-development',
  },
  {
    title: 'AI Development & Automation',
    body: 'AI assistants, LLM integrations, document automation, analytics and workflow automation for practical business use.',
    href: '/services/ai-development',
  },
  {
    title: 'Web & Mobile App Development',
    body: 'SEO-friendly websites, web applications, Android apps, iOS apps and cross-platform products with reliable backend systems.',
    href: '/services/web-development',
  },
  {
    title: 'SaaS & Platform Development',
    body: 'Scalable SaaS platforms with user management, dashboards, subscriptions, integrations and operational reporting.',
    href: '/services/saas-development',
  },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="hero-band">
        <div className="container py-16 text-center md:py-24">
          <p className="mx-auto inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {site.name} in Noida, India
          </p>
          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            AI & Software Development Company in Noida
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Rajlav Technologies helps startups, educational platforms, healthcare providers, finance companies and enterprises build AI development, custom software development, web development, mobile app development, SaaS development and business automation solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-black shadow-gold">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="rounded-md border border-white/15 px-6 py-3 font-semibold text-white hover:border-primary/60">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {h2Sections.map((section) => (
            <article className="premium-card" key={section.title}>
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">{section.body}</p>
              <Link href={section.href} className="mt-5 inline-block text-sm font-semibold text-primary">
                Learn about {section.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <h2 className="section-title">Industry Solutions</h2>
        <p className="section-lead">
          We build FinTech solutions, healthcare technology, EdTech solutions, startup software and business automation systems for teams that need dependable digital products.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {servicePages.slice(6).map((service) => (
            <Link href={`/services/${service.slug}`} className="premium-card block" key={service.slug}>
              <h3 className="font-bold text-white">{service.navTitle}</h3>
              <p className="mt-2 text-sm text-gray-300">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Our Case Studies</h2>
            <p className="section-lead">Selected product and platform concepts across education, healthcare, finance, AI and business operations.</p>
          </div>
          <Link href="/portfolio" className="hidden text-sm font-semibold text-primary md:block">Explore all portfolio work</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article className="premium-card overflow-hidden" key={item.slug}>
              <Image src={item.image} alt={item.alt} width={640} height={400} loading="lazy" className="mb-4 rounded-md border border-white/10" />
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.category}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              <Link href={`/portfolio/${item.slug}`} className="mt-4 inline-block text-sm font-semibold text-primary">
                View {item.title} case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <h2 className="section-title">Why Choose Rajlav Technologies</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Clear product thinking before development starts.', 'Search-friendly and mobile-first engineering standards.', 'Practical AI and automation that fits real operations.'].map((item) => (
            <div className="premium-card" key={item}>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <h2 className="section-title">Our Technology Stack</h2>
        <p className="section-lead">We choose tools around project needs, commonly working with React, Next.js, Node.js, TypeScript, cloud hosting, databases, APIs, analytics and AI integrations.</p>
      </section>

      <section className="container section-space">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details className="premium-card" key={faq.q}>
              <summary className="cursor-pointer font-semibold text-white">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-gray-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <div className="premium-card text-center">
          <h2 className="section-title">Contact Rajlav Technologies</h2>
          <p className="section-lead mx-auto">Have a project in mind? Let&apos;s build your next digital product with AI, software, web, mobile or automation support.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-black shadow-gold">Start Your Project</Link>
            <a href={`mailto:${site.email}`} className="rounded-md border border-white/15 px-6 py-3 font-semibold text-white">Discuss Your Idea</a>
          </div>
        </div>
      </section>
    </>
  )
}
