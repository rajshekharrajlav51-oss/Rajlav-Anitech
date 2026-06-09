import { SEO } from "@/components/SEO";
import LeadForm from "@/components/sections/LeadForm";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us | Rajlav Technologies" 
        description="Get in touch with Rajlav Technologies. We'd love to discuss your project and help you build digital products that scale."
      />
      <div className="pt-32">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Have a project in mind? We'd love to hear about it. Reach out to our team and let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </div>
      <LeadForm />
    </>
  );
}
