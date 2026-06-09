import { MetadataRoute } from 'next'

const base = 'https://www.rajlav-anitech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/services',
    '/services/ai-development',
    '/services/web-development',
    '/services/mobile-app-development',
    '/services/saas-development',
    '/services/ui-ux-design',
    '/portfolio',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}
