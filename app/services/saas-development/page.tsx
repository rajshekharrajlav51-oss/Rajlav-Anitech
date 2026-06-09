import Image from 'next/image'

export const metadata = {
  title: 'SaaS Development — Rajlav Anitech',
  description: 'SaaS product engineering: multi-tenant architecture, subscription models, security, scalability, and operational excellence.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services/saas-development' },
  openGraph: { url: 'https://www.rajlav-anitech.com/services/saas-development' },
  twitter: { card: 'summary_large_image' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'SaaS Development',
  'description': 'End-to-end SaaS engineering: multi-tenant systems, billing, security, observability and scaling.',
  'provider': { '@type': 'Organization', 'name': 'Rajlav Anitech', 'url': 'https://www.rajlav-anitech.com' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'How do you handle multi-tenancy?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We design tenancy models per product needs: isolated accounts, shared schema with row-level isolation, or hybrid models with clear migration paths.' } },
    { '@type': 'Question', 'name': 'Do you implement billing and subscriptions?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we integrate subscription billing, metering and invoicing using Stripe or bespoke billing systems depending on requirements.' } }
  ]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' },
    { '@type': 'ListItem', 'position': 3, 'name': 'SaaS Development', 'item': 'https://www.rajlav-anitech.com/services/saas-development' }
  ]
}

export default function SaasDevelopmentPage() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-white">SaaS Product Engineering</h1>
          <p className="mt-4 text-gray-300">We build SaaS platforms designed for growth, security, and operational efficiency. Our product teams deliver multi-tenant architectures, subscription flows, data protections, and observability so you can scale reliably.</p>

          <article className="prose prose-invert mt-6 max-w-none">
            <p>
              SaaS engineering is about creating systems that support thousands (or millions) of customers while keeping costs predictable and operations simple. We design tenancy models that suit your business: single-tenant isolation for high-security industries, shared schema with row-level isolation for cost efficiency, or hybrid approaches that balance isolation and operational simplicity. We also plan for on-boarding, tenant provisioning, and eventual tenant export or migration.
            </p>

            <h3>Billing and monetization</h3>
            <p>
              We implement subscription and metered billing integrations (Stripe, Chargebee) with clear entitlements, usage metering and invoicing. Our engineers design safe upgrade/downgrade flows, proration rules, trial handling, and enterprise contracts that support volume discounts and SSO integrations.
            </p>

            <h3>Security & compliance</h3>
            <p>
              Security is foundational: we implement encryption at rest and in transit, key management, role-based access control, and secure authentication flows including SSO/OAuth. For regulated workloads we assist with SOC2 readiness, GDPR compliance, and building the necessary evidence and controls for audits.
            </p>

            <h3>Scalability & operations</h3>
            <p>
              We architect for scalability from day one: autoscaling services, efficient multi-tenant databases, sharding strategies, and event-driven architectures when applicable. Observability is baked in: structured logs, distributed tracing, metrics, alerting and SLOs to ensure reliability and fast incident response.
            </p>

            <h3>Data strategy & analytics</h3>
            <p>
              SaaS products benefit from embedded analytics and metrics. We design data pipelines to power dashboards, product analytics and machine learning features while respecting tenant isolation and privacy. We help teams choose between in-house analytics, data warehouses, or managed observability platforms.
            </p>

            <h3>Delivery & growth</h3>
            <p>
              Faster time-to-market is balanced with architectural discipline. We deliver MVPs and then iterate rapidly, instrumenting product experiments, and optimizing funnels for retention and revenue. We also assist with customer onboarding playbooks and technical sales support to help your commercial teams close deals faster.
            </p>

            <p>
              Our SaaS engagements include architecture blueprints, implementation, testing, and handoff documentation. We can provide fractional engineering teams, augment existing engineering squads, or lead full product deliveries depending on your needs.
            </p>
          </article>
        </div>
        <div>
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%230b122b\"/></svg>'} alt="SaaS development" width={640} height={400} />
        </div>
      </div>
    </section>
  )
}
