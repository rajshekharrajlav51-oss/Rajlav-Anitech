import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Trust from "@/components/sections/Trust";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Partners />
      <Trust />
      <Portfolio />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HomePage />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
