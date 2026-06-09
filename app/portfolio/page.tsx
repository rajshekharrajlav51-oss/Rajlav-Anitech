import Image from 'next/image'

export const metadata = {
  title: 'Portfolio — Rajlav Anitech',
  description: 'Selected projects and case studies demonstrating our AI, web, mobile and SaaS work.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/portfolio' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Portfolio', 'item': 'https://www.rajlav-anitech.com/portfolio' }
  ]
}

export default function PortfolioPage(){
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="text-3xl font-bold text-white">Portfolio</h1>
      <p className="mt-3 text-gray-300">Selected projects showing outcomes, architecture, and measurable results from our work across AI, web and mobile.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold">AI-powered analytics platform</h3>
          <p className="mt-2 text-sm text-gray-300">Built a real-time analytics engine with ML-based anomaly detection and automated alerts.</p>
        </article>
        <article className="p-4 bg-gray-800 rounded">
          <h3 className="font-semibold">Next.js e-commerce platform</h3>
          <p className="mt-2 text-sm text-gray-300">Performance-first storefront with improved LCP and conversion rates.</p>
        </article>
      </div>
    </section>
  )
}
