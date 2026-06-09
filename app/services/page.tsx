import Link from 'next/link'

export const metadata = {
  title: 'Services — Rajlav Anitech',
  description: 'Our service lines include AI Development, Web Development, Mobile Apps, SaaS, and UI/UX Design.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' }
  ]
}

export default function ServicesIndex() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="text-3xl font-bold text-white">Services</h1>
      <p className="mt-2 text-gray-300">Explore our dedicated service pages for details, case studies and pricing guidance.</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        <li><Link href="/services/ai-development" className="block p-4 border rounded bg-gray-800">AI Development</Link></li>
        <li><Link href="/services/web-development" className="block p-4 border rounded bg-gray-800">Web Development</Link></li>
        <li><Link href="/services/mobile-app-development" className="block p-4 border rounded bg-gray-800">Mobile App Development</Link></li>
        <li><Link href="/services/saas-development" className="block p-4 border rounded bg-gray-800">SaaS Development</Link></li>
        <li><Link href="/services/ui-ux-design" className="block p-4 border rounded bg-gray-800">UI / UX Design</Link></li>
      </ul>
    </section>
  )
}
