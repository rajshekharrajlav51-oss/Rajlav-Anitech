import { absoluteUrl, site } from '../site-data'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Rajlav Technologies website inquiries and project communication.',
  alternates: { canonical: absoluteUrl('/privacy-policy') },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="container section-space">
      <h1 className="section-title">Privacy Policy</h1>
      <p className="section-lead">
        {site.name} collects only the information you submit through inquiry forms or email, such as name, contact details and project requirements. We use this information to respond to your request and discuss relevant services.
      </p>
      <div className="premium-card mt-8 space-y-5 text-gray-300">
        <p>We do not sell personal information. Project information shared with us is treated as confidential business communication.</p>
        <p>You can request correction or deletion of your inquiry information by contacting <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a>.</p>
      </div>
    </section>
  )
}
