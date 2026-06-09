export const metadata = {
  title: 'Contact — Rajlav Anitech',
  description: 'Contact Rajlav Anitech to discuss AI, web, mobile or SaaS projects. We respond quickly to qualify opportunities and propose next steps.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/contact' },
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Rajlav Anitech',
  'image': 'https://www.rajlav-anitech.com/logo.png',
  'telephone': '+91-6205834086',
  'address': { '@type': 'PostalAddress', 'addressLocality': 'Remote', 'addressRegion': 'Global' },
  'url': 'https://www.rajlav-anitech.com'
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': 'https://www.rajlav-anitech.com/contact' }
  ]
}

export default function ContactPage(){
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <h1 className="text-3xl font-bold text-white">Contact</h1>
      <p className="mt-4 text-gray-300">To discuss a project, send an email to <a href="mailto:hello@rajlav-anitech.com" className="text-primary">hello@rajlav-anitech.com</a> or use the contact form below.</p>
      <form className="mt-6 grid gap-3 max-w-xl">
        <input className="p-3 rounded bg-gray-800 border" placeholder="Name" />
        <input className="p-3 rounded bg-gray-800 border" placeholder="Email" />
        <textarea className="p-3 rounded bg-gray-800 border" rows={6} placeholder="Project details" />
        <button className="px-4 py-2 bg-primary text-black rounded">Send</button>
      </form>
    </section>
  )
}
