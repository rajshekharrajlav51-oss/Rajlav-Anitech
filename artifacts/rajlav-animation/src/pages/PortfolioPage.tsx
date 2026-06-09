import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";

export default function PortfolioPage() {
  return (
    <>
      <SEO 
        title="Portfolio | Rajlav Technologies" 
        description="View our portfolio of AI, Web, Mobile, and Enterprise software solutions. Real projects, real results."
      />
      <div className="pt-20">
        <Portfolio />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
