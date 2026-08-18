import { SEO } from "@/components/SEO";
import LeadForm from "@/components/sections/LeadForm";
import { site, url } from "@/lib/seo-data";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Rajlav Technologies" 
        description="Contact Rajlav Technologies in Noida to discuss AI development, custom software, websites, mobile apps, SaaS or business automation."
        canonical={url("/contact")}
      />
      <div className="pt-32">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Rajlav Technologies serves Noida, Delhi NCR, Uttar Pradesh and remote clients. Email {site.email} or share your project details below.
          </p>
        </div>
      </div>
      <LeadForm />
    </>
  );
}
