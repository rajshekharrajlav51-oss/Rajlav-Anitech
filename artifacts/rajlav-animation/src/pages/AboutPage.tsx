import { SEO } from "@/components/SEO";
import Trust from "@/components/sections/Trust";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import { url } from "@/lib/seo-data";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Rajlav Technologies" 
        description="Rajlav Technologies is the AI and software development division of the Rajlav ecosystem, serving Noida, Delhi NCR and remote clients."
        canonical={url("/about")}
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            About <span className="text-primary">Rajlav Technologies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Rajlav Technologies, also known as Rajlav Anitech, is the technology and software development division of the Rajlav ecosystem. We build AI solutions, custom software, websites, mobile apps, SaaS platforms and automation systems.
          </p>
        </div>
        <Trust />
        <HowItWorks />
      </div>
      <LeadForm />
    </>
  );
}
