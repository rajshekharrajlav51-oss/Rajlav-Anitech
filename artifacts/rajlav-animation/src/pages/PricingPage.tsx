import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Pricing | Rajlav Technologies" 
        description="Transparent pricing for AI development, web development, mobile apps, and SaaS solutions. Choose the plan that fits your needs."
      />
      <div className="pt-20">
        <Pricing />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
