import { MetadataRoute } from 'next'
import { absoluteUrl, portfolioItems, servicePages } from './site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/services',
    '/portfolio',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
  ]
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`)
  const portfolioRoutes = portfolioItems.map((item) => `/portfolio/${item.slug}`)
  const routes = [...staticRoutes, ...serviceRoutes, ...portfolioRoutes]

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/services') ? 0.8 : 0.7,
  }))
}
