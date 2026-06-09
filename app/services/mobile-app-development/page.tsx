import Image from 'next/image'

export const metadata = {
  title: 'Mobile App Development — Rajlav Anitech',
  description: 'End-to-end mobile app development for iOS and Android: native, cross-platform, performance, integrations, and app-store readiness.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services/mobile-app-development' },
  openGraph: { url: 'https://www.rajlav-anitech.com/services/mobile-app-development' },
  twitter: { card: 'summary_large_image' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Mobile App Development',
  'description': 'iOS and Android app development: native and cross-platform approaches with reliability, performance and app-store readiness.',
  'provider': { '@type': 'Organization', 'name': 'Rajlav Anitech', 'url': 'https://www.rajlav-anitech.com' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Do you build native apps?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — we build native iOS and Android apps as well as cross-platform apps using React Native or Flutter depending on product needs.' } },
    { '@type': 'Question', 'name': 'How do you handle releases?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We manage app-store submissions, CI for build automation, beta releases and phased rollouts with monitoring for crashes and performance.' } }
  ]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' },
    { '@type': 'ListItem', 'position': 3, 'name': 'Mobile App Development', 'item': 'https://www.rajlav-anitech.com/services/mobile-app-development' }
  ]
}

export default function MobileAppDevelopmentPage() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Mobile App Development</h1>
          <p className="mt-4 text-gray-300">We design and build mobile products that deliver fast, native-like experiences. Our teams focus on reliability, offline-first behavior, efficient networking, and maintainable architectures.</p>

          <article className="prose prose-invert mt-6 max-w-none">
            <p>
              Mobile products require tradeoffs: the right balance of native capabilities, performance, and development velocity. We advise on platform strategy — whether to pursue native iOS/Android, a cross-platform approach (React Native / Flutter), or a progressive web app that covers many devices with one codebase. We prioritize the user experience: fluid animations, responsive touch interactions, and minimal app launch times.
            </p>

            <h3>Architecture & engineering</h3>
            <p>
              Our engineers design modular architectures with clear separation between UI, domain logic and data layers. We use offline-first patterns, conflict resolution strategies, and efficient sync for mobile devices. For state management we adopt well-known patterns and provide TypeScript typings for robust developer experience.
            </p>

            <h3>Integrations & backend</h3>
            <p>
              Mobile apps often depend on cloud services: authentication, push notifications, analytics, and storage. We design secure APIs with token-based auth, fine-grained permissions, and efficient pagination and caching. Push and background sync are implemented with careful battery and privacy considerations.
            </p>

            <h3>Testing & release engineering</h3>
            <p>
              Testing includes unit tests, UI tests and device farm runs across representative devices. Release engineering covers CI automation for signed builds, beta distribution, staged rollouts, and crash monitoring. We instrument releases with performance telemetry and A/B gates to validate feature impact.
            </p>

            <h3>App store optimization & compliance</h3>
            <p>
              We prepare apps for App Store and Play Store submission: icons, metadata, privacy disclosures, and localized descriptions. We also help teams meet regulatory requirements like GDPR and COPPA where applicable.
            </p>

            <h3>Maintenance & scaling</h3>
            <p>
              Post-launch, we provide monitoring, dependency updates, and performance tuning. For high-growth apps we advise on backend autoscaling, sharding, and cost controls to keep the user experience smooth as traffic grows.
            </p>

            <p>
              Our mobile engagements include discovery sprints, MVP builds, and multi-quarter product engineering. We hand over running systems with complete documentation, CI/CD pipelines and knowledge transfer so your internal teams can iterate confidently.
            </p>
          </article>
        </div>
        <div>
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%230b1120\"/></svg>'} alt="Mobile app development" width={640} height={400} />
        </div>
      </div>
    </section>
  )
}
