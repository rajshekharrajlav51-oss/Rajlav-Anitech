import { SEO } from "@/components/SEO";
import { Globe, Zap, BarChart3, Lock, Smartphone, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/sections/LeadForm";
import CTA from "@/components/sections/CTA";

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Full-featured web apps built with React, Vue, and modern frameworks for optimal performance."
    },
    {
      icon: Zap,
      title: "High-Performance Sites",
      description: "Fast-loading, SEO-optimized websites that convert visitors into customers."
    },
    {
      icon: BarChart3,
      title: "Admin Dashboards",
      description: "Powerful analytics and management dashboards for data-driven decision making."
    },
    {
      icon: Lock,
      title: "Secure & Scalable",
      description: "Enterprise-grade security and infrastructure built to scale with your growth."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Beautiful, functional designs that work perfectly on all devices and screen sizes."
    },
    {
      icon: Lightbulb,
      title: "API Development",
      description: "RESTful and GraphQL APIs designed for seamless third-party integrations."
    }
  ];

  return (
    <>
      <SEO 
        title="Web Development Services | Rajlav Technologies" 
        description="Custom web applications, SaaS platforms, and high-performance websites built with modern technologies."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Web <span className="text-primary">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Build powerful, scalable web applications that drive business growth. From SaaS platforms to enterprise portals, we create web solutions that perform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() =>
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Web Development Project
            </Button>
          </div>
        </div>
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
