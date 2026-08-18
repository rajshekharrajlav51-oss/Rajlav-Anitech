import Link from 'next/link'
import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'Pricing and Engagement Models',
  description: 'Flexible discovery, fixed-scope, dedicated team and managed support options for software, AI, SaaS, web and automation projects.',
  alternates: { canonical: absoluteUrl('/pricing') },
}

export default function PricingPage() {
  return (
    <section className="container section-space">
      <h1 className="section-title">Pricing and Engagement Models</h1>
      <p className="section-lead">
        {site.name} estimates projects based on scope, integrations, design needs, timeline and ongoing support requirements. We avoid one-size-fits-all pricing for custom software.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ['Discovery Sprint', 'A focused planning engagement to define requirements, risks, architecture and a realistic implementation roadmap.'],
          ['Fixed Scope', 'Best for clearly defined websites, MVPs, dashboards and workflow tools with agreed deliverables and milestones.'],
          ['Dedicated Team', 'Monthly engineering support for startups and businesses that need ongoing product development.'],
          ['Managed Support', 'Ongoing maintenance, automation improvements, monitoring and iteration after launch.'],
        ].map(([title, body]) => (
          <article className="premium-card" key={title}>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{body}</p>
          </article>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-black shadow-gold">
        Discuss Your Idea
      </Link>
    </section>
  )
}
