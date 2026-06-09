export const metadata = {
  title: 'About — Rajlav Anitech',
  description: 'Rajlav Anitech is a product engineering firm building AI, web and mobile products with a focus on outcomes and reliability.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/about' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://www.rajlav-anitech.com/about' }
  ]
}

export default function AboutPage(){
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="text-3xl font-bold text-white">About Rajlav Anitech</h1>
      <p className="mt-4 text-gray-300">We are a team of engineers, designers and product builders focused on creating AI-first software that drives measurable business results. Our collective experience spans startups and enterprise products across fintech, healthcare, and e-commerce.</p>
      <p className="mt-4 text-gray-300">Our approach blends rapid experimentation with engineering rigor: we validate assumptions quickly and then build reliable, monitored systems ready for production.</p>
    </section>
  )
}
