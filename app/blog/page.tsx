import Link from 'next/link'

export const metadata = {
  title: 'Blog — Rajlav Anitech',
  description: 'Articles on AI, web development, product engineering, and technical strategy from the Rajlav Anitech team.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/blog' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://www.rajlav-anitech.com/blog' }
  ]
}

export default function BlogPage(){
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <p className="mt-3 text-gray-300">Insights on product, engineering and AI.</p>
      <ul className="mt-6 space-y-4">
        <li><Link href="#" className="text-primary">How to ship ML features without long-term debt</Link></li>
        <li><Link href="#" className="text-primary">Optimizing Core Web Vitals for large sites</Link></li>
      </ul>
    </section>
  )
}
