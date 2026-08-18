import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";
import { url } from "@/lib/seo-data";

export default function PortfolioPage() {
  return (
    <>
      <SEO 
        title="Portfolio | Rajlav Technologies" 
        description="View Rajlav Technologies case studies across EdTech, healthcare software, FinTech CRM, AI automation, payments and reporting workflows."
        canonical={url("/portfolio")}
      />
      <div className="pt-20">
        <Portfolio />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
