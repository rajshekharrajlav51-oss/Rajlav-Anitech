export const metadata = {
  title: 'Pricing — Rajlav Anitech',
  description: 'Flexible pricing models: discovery sprints, fixed-price engagements, time-and-materials teams, and managed services.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/pricing' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Pricing', 'item': 'https://www.rajlav-anitech.com/pricing' }
  ]
}

export default function PricingPage(){
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <h1 className="text-3xl font-bold text-white">Pricing</h1>
      <p className="mt-4 text-gray-300">We offer flexible engagement models tailored to project stage and risk profile. Typical options include:</p>
      <ul className="mt-6 list-disc ml-6 text-gray-300">
        <li><strong>Discovery sprint:</strong> Time-boxed engagement to validate ideas and produce an implementation plan.</li>
        <li><strong>Fixed scope:</strong> For well-defined projects with agreed deliverables and milestones.</li>
        <li><strong>Time & materials:</strong> Dedicated teams billed monthly for long-term product work.</li>
        <li><strong>Managed services:</strong> Ongoing platform operations and MLOps managed for predictable SLAs.</li>
      </ul>

      <p className="mt-6 text-gray-300">Contact us for a tailored estimate — we provide clear breakdowns of work, milestones, and expected outcomes so you can make an informed decision.</p>
    </section>
  )
}
