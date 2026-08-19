import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
          <figure className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <img src={item.thumbnail} alt={item.alt} className="w-full" loading="eager" />
            <figcaption className="border-t border-white/10 px-5 py-3 text-sm text-white/50">
              Branded project cover shown for the verified Rajlav ecosystem product.
            </figcaption>
          </figure>

          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <article className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-8">{item.overview}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Business Problem</h2>
                <p className="text-gray-300 leading-8">{item.problem}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
                <p className="text-gray-300 leading-8">{item.solution}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-gray-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Technology Used</h2>
                <div className="flex flex-wrap gap-2">
                  {item.technology.map((technology) => (
                    <span key={technology} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      {technology}
                    </span>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Development Approach</h2>
                <p className="text-gray-300 leading-8">{item.approach}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Outcome</h2>
                <p className="text-gray-300 leading-8">{item.outcome}</p>
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
                <ArrowRight className="ml-2 h-4 w-4" />
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
