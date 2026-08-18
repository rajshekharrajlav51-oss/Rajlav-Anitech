import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'Contact Rajlav Technologies',
  description: 'Contact Rajlav Technologies in Noida to discuss AI development, custom software, websites, mobile apps, SaaS or business automation.',
  alternates: { canonical: absoluteUrl('/contact') },
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  alternateName: site.alternateName,
  image: absoluteUrl('/opengraph.jpg'),
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: site.serviceArea,
  url: site.domain,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.domain },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: absoluteUrl('/contact') },
  ],
}

export default function ContactPage() {
  return (
    <section className="container section-space">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <h1 className="section-title">Contact Rajlav Technologies</h1>
      <p className="section-lead">
        Rajlav Technologies is a software and AI development company serving businesses in Noida, Delhi NCR and remote clients. Share your project requirements and we will help define the next step.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <form className="premium-card grid gap-4 lg:col-span-2">
          <input className="rounded-md border border-white/10 bg-black/40 p-3" placeholder="Name" aria-label="Name" />
          <input className="rounded-md border border-white/10 bg-black/40 p-3" placeholder="Email" aria-label="Email" />
          <textarea className="rounded-md border border-white/10 bg-black/40 p-3" rows={6} placeholder="Project details" aria-label="Project details" />
          <button className="rounded-md bg-primary px-4 py-3 font-semibold text-black shadow-gold">Send Project Inquiry</button>
        </form>
        <aside className="premium-card">
          <h2 className="text-xl font-bold text-white">Business Details</h2>
          <dl className="mt-5 space-y-4 text-sm text-gray-300">
            <div><dt className="font-semibold text-white">Business name</dt><dd>{site.name}</dd></div>
            <div><dt className="font-semibold text-white">City</dt><dd>{site.city}, {site.region}, {site.country}</dd></div>
            <div><dt className="font-semibold text-white">Service area</dt><dd>Noida, Delhi NCR, Uttar Pradesh and remote projects</dd></div>
            <div><dt className="font-semibold text-white">Phone</dt><dd><a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="text-primary">{site.phone}</a></dd></div>
            <div><dt className="font-semibold text-white">Email</dt><dd><a href={`mailto:${site.email}`} className="text-primary">{site.email}</a></dd></div>
            <div><dt className="font-semibold text-white">Business hours</dt><dd>Monday to Saturday, 10:00 AM to 7:00 PM IST</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
