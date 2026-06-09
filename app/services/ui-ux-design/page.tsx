import Image from 'next/image'

export const metadata = {
  title: 'UI / UX Design — Rajlav Anitech',
  description: 'User-centered UI and UX design: research, interaction design, prototyping, and design systems for scalable products.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services/ui-ux-design' },
  openGraph: { url: 'https://www.rajlav-anitech.com/services/ui-ux-design' },
  twitter: { card: 'summary_large_image' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'UI / UX Design',
  'description': 'User research, interaction design, prototypes, accessibility, and design systems to create delightful product experiences.',
  'provider': { '@type': 'Organization', 'name': 'Rajlav Anitech', 'url': 'https://www.rajlav-anitech.com' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'Do you provide design systems?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes — we build component libraries, tokens, and documentation to scale design across engineering teams.' } },
    { '@type': 'Question', 'name': 'Do you conduct user research?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We run moderated and unmoderated user research to validate assumptions and prioritize product features.' } }
  ]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' },
    { '@type': 'ListItem', 'position': 3, 'name': 'UI / UX Design', 'item': 'https://www.rajlav-anitech.com/services/ui-ux-design' }
  ]
}

export default function UiUxDesignPage() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-white">UI & UX Design Services</h1>
          <p className="mt-4 text-gray-300">We craft human-centered designs that balance beauty, clarity and conversion. Our design work reduces friction, accelerates onboarding, and increases user satisfaction.</p>

          <article className="prose prose-invert mt-6 max-w-none">
            <p>
              Great UX begins with questions: who are the users, what are their goals, and what constraints will the product operate within? We combine user research, stakeholder interviews, and analytics to form a clear hypothesis and prioritized roadmap of design work. Our process emphasizes rapid prototyping and iterative testing so decisions are evidence-based rather than opinion-driven.
            </p>

            <h3>Research & discovery</h3>
            <p>
              Research methods include user interviews, usability testing, surveys, and heuristic audits of existing products. We synthesize findings into personas, journey maps and opportunity trees that guide feature definition and prioritization.
            </p>

            <h3>Interaction & visual design</h3>
            <p>
              We design interactions that feel intuitive and performant. Using a component-first approach, we deliver high-fidelity prototypes and motion studies that demonstrate real-world behavior. Visual systems are accessible and brand-aligned, with clear hierarchy and responsive patterns for multiple breakpoints.
            </p>

            <h3>Design systems & developer handoff</h3>
            <p>
              To scale design across teams we create tokenized design systems with accessible components, documentation and example usage. Handoff includes Figma libraries, component specs, and code-ready snippets to minimize implementation drift and speed up engineering delivery.
            </p>

            <h3>Testing & validation</h3>
            <p>
              Prototypes are validated with target users to measure time-on-task, error rates and satisfaction. We run lightweight A/B tests and gather qualitative feedback to ensure design choices move key metrics.
            </p>

            <h3>Accessibility & inclusivity</h3>
            <p>
              Accessibility is embedded from the start: color contrast, keyboard navigation, ARIA attributes and screen reader testing. Building inclusive products increases reach and reduces barriers for a broader audience.
            </p>

            <p>
              Our designers collaborate tightly with engineers to produce pragmatic systems that ship. We provide design audit reports, component libraries, and a prioritized roadmap so product teams can iterate quickly while maintaining visual and interaction consistency.
            </p>
          </article>
        </div>
        <div>
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%23101a2b\"/></svg>'} alt="UI UX design" width={640} height={400} />
        </div>
      </div>
    </section>
  )
}
