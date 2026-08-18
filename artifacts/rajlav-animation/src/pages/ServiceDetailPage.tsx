import { Link } from "wouter";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";
import { portfolio, services, site, url } from "@/lib/seo-data";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  const related = portfolio.filter((item) => item.services.includes(service.slug)).slice(0, 2);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Services", item: url("/services") },
      { "@type": "ListItem", position: 3, name: service.navTitle, item: url(`/services/${service.slug}`) },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navTitle,
    description: service.meta,
    provider: { "@type": "Organization", name: site.name, url: site.domain },
    areaServed: ["Noida", "Delhi NCR", "Uttar Pradesh", "India"],
  };

  return (
    <>
      <SEO
        title={`${service.title} | Rajlav Technologies`}
        description={service.meta}
        canonical={url(`/services/${service.slug}`)}
        pageType="service"
        schema={[breadcrumb, serviceSchema]}
      />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.24em] mb-4">Rajlav Technologies</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl">{service.title}</h1>
          <p className="text-gray-400 text-lg leading-8 max-w-3xl mt-6">{service.summary}</p>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <article className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How We Help</h2>
              <div className="space-y-5 text-gray-300 leading-8">
                {service.sections.map((section) => (
                  <p key={section}>{section}</p>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Choose Rajlav Technologies</h2>
              <p className="text-gray-300 leading-8">
                We combine product planning, design, software engineering, testing and deployment support so your project can move from idea to usable product with clear ownership.
              </p>
            </article>
            <aside className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Service Area</h2>
              <p className="text-gray-300 leading-7">Noida, Delhi NCR, Uttar Pradesh, India and selected remote projects.</p>
              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white">
                Get Free Consultation
              </Link>
            </aside>
          </div>

          {related.length > 0 ? (
            <section className="mt-16">
              <h2 className="text-3xl font-extrabold text-white">Relevant Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {related.map((item) => (
                  <Link href={`/portfolio/${item.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-primary/30" key={item.slug}>
                    <p className="text-primary text-xs font-semibold uppercase tracking-widest">{item.category}</p>
                    <h3 className="text-xl font-bold text-white mt-3">{item.title}</h3>
                    <p className="text-gray-400 mt-3 leading-7">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
      <CTA />
      <LeadForm />
    </>
  );
}
