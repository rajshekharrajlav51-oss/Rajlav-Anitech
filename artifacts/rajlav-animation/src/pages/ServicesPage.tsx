import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";
import { url } from "@/lib/seo-data";

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Services | Rajlav Technologies" 
        description="Explore AI development, custom software, web development, mobile app development, SaaS and business automation services from Rajlav Technologies."
        canonical={url("/services")}
      />
      <div className="pt-20">
        <Services />
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
