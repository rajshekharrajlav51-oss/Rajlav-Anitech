import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import GoogleAnalytics from './GoogleAnalytics'
import { absoluteUrl, servicePages, site } from './site-data'

export const metadata = {
  metadataBase: new URL(site.domain),
  applicationName: site.name,
  title: {
    default: 'Rajlav Technologies | AI & Software Development Company in Noida',
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/'),
    siteName: site.name,
    title: 'Rajlav Technologies | AI & Software Development Company',
    description: site.shortDescription,
    images: [{ url: absoluteUrl('/opengraph.jpg'), width: 1200, height: 630, alt: 'Rajlav Technologies AI software development company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajlav Technologies | AI & Software Development Company',
    description: site.shortDescription,
    images: [absoluteUrl('/opengraph.jpg')],
  },
}

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system' }}>
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-bold text-white" aria-label="Rajlav Technologies home">
              Rajlav <span className="text-primary">Technologies</span>
            </Link>
            <nav aria-label="Primary navigation">
              <ul className="hidden gap-5 text-sm text-gray-200 md:flex">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="/contact" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black shadow-gold">
              Get Free Consultation
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-black text-gray-300">
          <div className="container grid gap-8 py-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-white">{site.name}</h2>
              <p className="mt-3 text-sm">AI & Software Development Company serving Noida, Delhi NCR and clients across India.</p>
              <p className="mt-3 text-sm">Also known as {site.alternateName}, the technology division of the Rajlav ecosystem.</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Services</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {servicePages.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-primary">
                      {service.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Company</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Location</h2>
              <p className="mt-3 text-sm">Noida, Uttar Pradesh, India</p>
              <p className="mt-2 text-sm">Service area: Noida, Delhi NCR and remote engagements.</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-primary">{site.email}</a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="mt-2 block text-sm text-primary">{site.phone}</a>
            </div>
          </div>
          <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
            Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </footer>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
