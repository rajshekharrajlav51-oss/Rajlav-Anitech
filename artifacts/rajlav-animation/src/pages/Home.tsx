import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Trust from "@/components/sections/Trust";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Partners />
      <Trust />
      <Portfolio />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <LeadForm />
    </>
  );
}
