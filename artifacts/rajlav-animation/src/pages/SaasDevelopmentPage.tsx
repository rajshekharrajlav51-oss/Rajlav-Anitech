import { SEO } from "@/components/SEO";
import { CloudCog, Database, Zap, Users, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/sections/LeadForm";
import CTA from "@/components/sections/CTA";

export default function SaasDevelopmentPage() {
  const features = [
    {
      icon: CloudCog,
      title: "Multi-Tenant Architecture",
      description: "Scalable infrastructure built for multiple customers on a single platform."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure data storage, backup, and management for mission-critical applications."
    },
    {
      icon: Zap,
      title: "Performance at Scale",
      description: "Optimized systems that maintain speed and reliability as your user base grows."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Flexible user roles, permissions, and access control systems."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Built-in analytics dashboards and custom reporting capabilities."
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise security, data encryption, and regulatory compliance built-in."
    }
  ];

  return (
    <>
      <SEO 
        title="SaaS Development Services | Rajlav Technologies" 
        description="Build scalable SaaS platforms with multi-tenant architecture, analytics, and enterprise features."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            SaaS <span className="text-primary">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Build profitable SaaS products with scalable architecture, multi-tenant support, and subscription management. From MVP to enterprise-scale platforms.
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
              Build Your SaaS Platform
            </Button>
          </div>
        </div>
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
