import Link from 'next/link'
import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'Blog',
  description: 'Articles on AI development, software engineering, web development and product strategy from Rajlav Technologies.',
  alternates: { canonical: absoluteUrl('/blog') },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
  ],
}

export default function BlogPage() {
  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="section-title">Rajlav Technologies Blog</h1>
      <p className="section-lead">Insights on AI development, product engineering, web performance and automation.</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        <li className="premium-card"><Link href="#" className="text-primary">How to ship AI features without long-term product debt</Link></li>
        <li className="premium-card"><Link href="#" className="text-primary">Optimizing Core Web Vitals for business websites</Link></li>
      </ul>
    </section>
  )
}
