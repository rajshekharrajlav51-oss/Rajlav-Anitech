import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Services | Rajlav Technologies" 
        description="Explore our AI, Web, Mobile App, and SaaS development services."
      />
      <div className="pt-20">
        <Services />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
