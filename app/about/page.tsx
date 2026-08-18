import Link from 'next/link'
import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'About Rajlav Technologies',
  description: 'Rajlav Technologies is the AI and software development division of the Rajlav ecosystem, serving Noida, Delhi NCR and remote clients.',
  alternates: { canonical: absoluteUrl('/about') },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
    { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl('/about') },
  ],
}

export default function AboutPage() {
  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="section-title">About Rajlav Technologies</h1>
      <p className="section-lead">
        Rajlav Technologies, also known as Rajlav Anitech, is the technology and software development division of the Rajlav ecosystem. We help businesses build AI solutions, custom software, websites, mobile apps, SaaS platforms and automation systems.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="premium-card">
          <h2 className="text-2xl font-bold text-white">Built for Practical Product Work</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Our work starts with the business problem, not a technology trend. We define user flows, data needs, integrations, risks and release priorities before building software that teams can actually use.
          </p>
        </article>
        <article className="premium-card">
          <h2 className="text-2xl font-bold text-white">Serving Noida and Delhi NCR</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Rajlav Technologies serves businesses in Noida, Delhi NCR, Uttar Pradesh and remote clients that need dependable engineering support for new or existing digital products.
          </p>
        </article>
      </div>
      <Link href="/contact" className="mt-10 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-black shadow-gold">
        Get Free Consultation
      </Link>
    </section>
  )
}
