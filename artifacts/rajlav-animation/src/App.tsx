import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Pages
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import AiDevelopmentPage from "@/pages/AiDevelopmentPage";
import WebDevelopmentPage from "@/pages/WebDevelopmentPage";
import MobileDevelopmentPage from "@/pages/MobileDevelopmentPage";
import SaasDevelopmentPage from "@/pages/SaasDevelopmentPage";
import UiUxPage from "@/pages/UiUxPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PricingPage from "@/pages/PricingPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Route path="/" component={Home} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/services/ai-development" component={AiDevelopmentPage} />
              <Route path="/services/web-development" component={WebDevelopmentPage} />
              <Route path="/services/mobile-app-development" component={MobileDevelopmentPage} />
              <Route path="/services/saas-development" component={SaasDevelopmentPage} />
              <Route path="/services/ui-ux-design" component={UiUxPage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/pricing" component={PricingPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/blog" component={BlogPage} />
              <Route component={NotFound} />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
