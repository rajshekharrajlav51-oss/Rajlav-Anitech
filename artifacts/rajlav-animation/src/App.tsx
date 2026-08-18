import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Pages
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import UiUxPage from "@/pages/UiUxPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import PricingPage from "@/pages/PricingPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
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
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/services/ai-development"><ServiceDetailPage slug="ai-development" /></Route>
                <Route path="/services/web-development"><ServiceDetailPage slug="web-development" /></Route>
                <Route path="/services/mobile-app-development"><ServiceDetailPage slug="mobile-app-development" /></Route>
                <Route path="/services/saas-development"><ServiceDetailPage slug="saas-development" /></Route>
                <Route path="/services/ui-ux-design" component={UiUxPage} />
                <Route path="/services/software-development"><ServiceDetailPage slug="software-development" /></Route>
                <Route path="/services/business-automation"><ServiceDetailPage slug="business-automation" /></Route>
                <Route path="/services/fintech-development"><ServiceDetailPage slug="fintech-development" /></Route>
                <Route path="/services/healthcare-software"><ServiceDetailPage slug="healthcare-software" /></Route>
                <Route path="/services/edtech-development"><ServiceDetailPage slug="edtech-development" /></Route>
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/portfolio/edtech-learning-platform"><CaseStudyPage slug="edtech-learning-platform" /></Route>
                <Route path="/portfolio/healthcare-management-system"><CaseStudyPage slug="healthcare-management-system" /></Route>
                <Route path="/portfolio/finance-crm"><CaseStudyPage slug="finance-crm" /></Route>
                <Route path="/portfolio/ai-business-assistant"><CaseStudyPage slug="ai-business-assistant" /></Route>
                <Route path="/portfolio/payments-inventory"><CaseStudyPage slug="payments-inventory" /></Route>
                <Route path="/portfolio/reporting-automation"><CaseStudyPage slug="reporting-automation" /></Route>
                <Route path="/pricing" component={PricingPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route path="/terms-and-conditions" component={TermsPage} />
                <Route component={NotFound} />
              </Switch>
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
