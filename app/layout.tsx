import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import GoogleAnalytics from './GoogleAnalytics'

export const metadata = {
  metadataBase: new URL('https://www.rajlav-anitech.com'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system' }}>
      <body>
        <header className="border-b bg-gradient-to-r from-gray-900 to-black">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">Rajlav Anitech</Link>
            <nav>
              <ul className="flex gap-4 text-gray-200">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact" className="ml-3 px-3 py-1 rounded bg-primary text-black">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t mt-12 bg-gray-900 text-gray-300">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-white">Rajlav Anitech</h3>
                <p className="max-w-md">We build AI-first software, web, and mobile products.</p>
              </div>
              <div>
                <h4 className="font-semibold">Company</h4>
                <ul className="mt-2">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-sm">© {new Date().getFullYear()} Rajlav Anitech — All rights reserved.</div>
          </div>
        </footer>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
