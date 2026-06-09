import { SEO } from "@/components/SEO";
import { Smartphone, Apple, Zap, Users, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/sections/LeadForm";
import CTA from "@/components/sections/CTA";

export default function MobileDevelopmentPage() {
  const features = [
    {
      icon: Apple,
      title: "iOS Development",
      description: "Native iOS apps built with Swift, optimized for performance and user experience."
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Robust Android applications using Kotlin and modern development practices."
    },
    {
      icon: Zap,
      title: "Cross-Platform Apps",
      description: "React Native and Flutter apps that run on both iOS and Android seamlessly."
    },
    {
      icon: Users,
      title: "UI/UX Focused",
      description: "Beautiful, intuitive interfaces designed with user experience at the core."
    },
    {
      icon: BarChart3,
      title: "App Analytics",
      description: "Integrated analytics to track user behavior and app performance metrics."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Security best practices and compliance with app store guidelines."
    }
  ];

  return (
    <>
      <SEO 
        title="Mobile App Development | Rajlav Technologies" 
        description="iOS and Android app development. Custom mobile solutions for iOS, Android, and cross-platform deployment."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Mobile <span className="text-primary">App Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Create powerful mobile experiences for iOS and Android. From native apps to cross-platform solutions, we deliver apps that users love.
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
              Start Mobile Project
            </Button>
          </div>
        </div>
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
