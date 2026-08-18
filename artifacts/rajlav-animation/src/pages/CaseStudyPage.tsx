import { Link } from "wouter";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";
import { portfolio, services, site, url } from "@/lib/seo-data";

export default function CaseStudyPage({ slug }: { slug: string }) {
  const item = portfolio.find((portfolioItem) => portfolioItem.slug === slug);

  if (!item) {
    return null;
  }

  const relatedServices = services.filter((service) => item.services.includes(service.slug));
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: url("/portfolio") },
      { "@type": "ListItem", position: 3, name: item.title, item: url(`/portfolio/${item.slug}`) },
    ],
  };

  return (
    <>
      <SEO
        title={`${item.title} Case Study | Rajlav Technologies`}
        description={`${item.category} case study for ${item.industry.toLowerCase()} workflows by Rajlav Technologies.`}
        canonical={url(`/portfolio/${item.slug}`)}
        schema={breadcrumb}
      />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.24em] mb-4">{item.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl">{item.title}</h1>
          <p className="text-gray-400 text-lg leading-8 max-w-3xl mt-6">{item.description}</p>
          <img src={item.thumbnail} alt={item.alt} className="mt-10 w-full rounded-3xl border border-white/10" loading="eager" />

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <article className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-8">A {item.category.toLowerCase()} concept showing how Rajlav Technologies structures practical digital products for {item.industry.toLowerCase()} teams.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Client/Business Problem</h2>
                <p className="text-gray-300 leading-8">Teams often face disconnected tools, repeated manual updates, limited reporting and inconsistent user experiences.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
                <p className="text-gray-300 leading-8">The solution combines focused workflows, secure data handling, responsive interfaces and integrations that fit the business process.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Technology Used</h2>
                <p className="text-gray-300 leading-8">Typical technology includes React, APIs, databases, dashboards, cloud deployment and AI integrations where they fit the requirement.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Business Impact</h2>
                <p className="text-gray-300 leading-8">A well-built platform can improve workflow visibility, reduce repeated manual work and create a stronger foundation for digital growth.</p>
              </section>
            </article>
            <aside className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Related Services</h2>
              <ul className="space-y-3">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-primary hover:text-primary/80">{service.navTitle}</Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white">
                Start Your Project
              </Link>
            </aside>
          </div>
        </div>
      </section>
      <CTA />
      <LeadForm />
    </>
  );
}
