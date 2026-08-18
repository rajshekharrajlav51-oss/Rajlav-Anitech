import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";
import { url } from "@/lib/seo-data";

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Pricing | Rajlav Technologies" 
        description="Flexible discovery, fixed-scope, monthly team and support options for software, AI, SaaS, web and automation projects."
        canonical={url("/pricing")}
      />
      <div className="pt-20">
        <Pricing />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
