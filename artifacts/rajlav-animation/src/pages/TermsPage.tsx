import { SEO } from "@/components/SEO";
import { site, url } from "@/lib/seo-data";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Rajlav Technologies"
        description="Terms and conditions for using the Rajlav Technologies website."
        canonical={url("/terms-and-conditions")}
      />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Terms and Conditions</h1>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 space-y-5 text-gray-300 leading-8">
            <p>This website provides general information about {site.name}, our services and portfolio concepts.</p>
            <p>Specific project scope, pricing, ownership, timelines and support commitments are defined separately in written project agreements.</p>
            <p>For questions, contact <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
