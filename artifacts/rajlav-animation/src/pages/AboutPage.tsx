import { SEO } from "@/components/SEO";
import Trust from "@/components/sections/Trust";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us | Rajlav Technologies" 
        description="Learn about Rajlav Technologies, our mission to build digital products that scale, and our expertise in AI, Web, Mobile, and SaaS development."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            About <span className="text-primary">Rajlav Technologies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            We are a team of experienced developers, designers, and AI specialists dedicated to building digital products that help businesses scale. With expertise across AI, Web Development, Mobile Apps, and SaaS platforms, we transform complex ideas into elegant solutions.
          </p>
        </div>
        <Trust />
        <HowItWorks />
      </div>
      <LeadForm />
    </>
  );
}
