import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Trust from "@/components/sections/Trust";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import WhyRajlav from "@/components/sections/WhyRajlav";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Technology from "@/components/sections/Technology";
import Industries from "@/components/sections/Industries";
import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO noFaqSchema={false} />
      <Hero />
      <Partners />
      <Trust />
      <WhyRajlav />
      <Portfolio />
      <Services />
      <HowItWorks />
      <Technology />
      <Industries />
      <AboutPreview />
      <Pricing />
      <FAQ />
      <CTA />
      <LeadForm />
    </>
  );
}
