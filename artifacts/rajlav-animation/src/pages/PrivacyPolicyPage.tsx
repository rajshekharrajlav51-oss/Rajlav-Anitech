import { SEO } from "@/components/SEO";
import { site, url } from "@/lib/seo-data";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Rajlav Technologies"
        description="Privacy policy for Rajlav Technologies website inquiries and project communication."
        canonical={url("/privacy-policy")}
      />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Privacy Policy</h1>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 space-y-5 text-gray-300 leading-8">
            <p>{site.name} collects only the information you submit through inquiry forms or email, such as name, contact details and project requirements.</p>
            <p>We use this information to respond to your request, discuss relevant services and prepare project communication.</p>
            <p>We do not sell personal information. You can request correction or deletion by contacting <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
