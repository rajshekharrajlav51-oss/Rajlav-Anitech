import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for using the Rajlav Technologies website.',
  alternates: { canonical: absoluteUrl('/terms-and-conditions') },
}

export default function TermsAndConditionsPage() {
  return (
    <section className="container section-space">
      <h1 className="section-title">Terms and Conditions</h1>
      <p className="section-lead">
        This website provides general information about {site.name}, our services and portfolio concepts. Specific project terms, pricing, ownership and support commitments are defined separately in written project agreements.
      </p>
      <div className="premium-card mt-8 space-y-5 text-gray-300">
        <p>Website content should not be treated as a guaranteed project outcome, legal advice or financial advice.</p>
        <p>For questions about service terms, contact <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a>.</p>
      </div>
    </section>
  )
}
