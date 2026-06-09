import { SEO } from "@/components/SEO";
import { Palette, Users, Zap, Eye, BarChart3, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/sections/LeadForm";
import CTA from "@/components/sections/CTA";

export default function UiUxPage() {
  const features = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Beautiful, modern interfaces with consistent branding and design systems."
    },
    {
      icon: Users,
      title: "User Research",
      description: "In-depth research and testing to understand your users' needs and behaviors."
    },
    {
      icon: Eye,
      title: "UX Strategy",
      description: "Comprehensive user experience strategies aligned with business goals."
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Interactive prototypes to validate concepts before development."
    },
    {
      icon: BarChart3,
      title: "Usability Testing",
      description: "User testing and feedback to continuously improve the experience."
    },
    {
      icon: Lightbulb,
      title: "Design Systems",
      description: "Scalable component libraries and design systems for consistency."
    }
  ];

  return (
    <>
      <SEO 
        title="UI/UX Design Services | Rajlav Technologies" 
        description="Professional UI/UX design for web and mobile applications. User-focused design that drives conversions."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            UI/UX <span className="text-primary">Design</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Create exceptional user experiences that delight users and drive business results. From research to design systems, we cover the full spectrum of UX.
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
              Start Design Project
            </Button>
          </div>
        </div>
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
