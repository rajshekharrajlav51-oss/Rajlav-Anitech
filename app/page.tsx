import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Rajlav Anitech — AI-first software, web & mobile',
  description: 'Rajlav Anitech builds AI-first web, mobile, and SaaS products. Expert teams for AI development, web development, mobile apps, SaaS, and UI/UX design.',
  openGraph: {
    title: 'Rajlav Anitech — AI-first software, web & mobile',
    description: 'Rajlav Anitech builds AI-first web, mobile, and SaaS products.',
    url: 'https://www.rajlav-anitech.com',
    siteName: 'Rajlav Anitech',
  },
  twitter: {
    title: 'Rajlav Anitech — AI-first software, web & mobile',
    card: 'summary_large_image',
  },
  alternates: { canonical: 'https://www.rajlav-anitech.com/' },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rajlav Anitech",
  "url": "https://www.rajlav-anitech.com",
  "logo": "https://www.rajlav-anitech.com/logo.png",
  "sameAs": ["https://www.linkedin.com/company/rajlav-anitech"]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' }
  ]
}

export default function Home() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Build AI-first products that scale</h1>
          <p className="mt-4 text-lg text-gray-300">We combine engineering discipline, product strategy and machine learning to deliver production-grade software and automation.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/services" className="px-4 py-2 bg-primary text-black font-semibold rounded">Explore Services</Link>
            <Link href="/contact" className="px-4 py-2 border border-gray-700 rounded">Contact Sales</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"360\"><rect width=\"100%\" height=\"100%\" fill=\"%23000\"/></svg>'} alt="Rajlav Anitech" width={640} height={360} />
        </div>
      </div>
      <nav className="mt-12">
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </section>
  )
}
