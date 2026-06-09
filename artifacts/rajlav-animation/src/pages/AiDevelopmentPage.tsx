import { SEO } from "@/components/SEO";
import { Bot, Zap, BarChart3, Brain, MessageCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/sections/LeadForm";
import CTA from "@/components/sections/CTA";

export default function AiDevelopmentPage() {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description: "Conversational AI powered by GPT and advanced language models for customer support and engagement."
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, classification, and intelligent automation."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate complex business processes with intelligent AI-powered systems."
    },
    {
      icon: MessageCircle,
      title: "NLP & Text Analysis",
      description: "Advanced natural language processing for sentiment analysis, classification, and understanding."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights and predictions to inform business decisions and strategy."
    },
    {
      icon: Lightbulb,
      title: "Custom AI Models",
      description: "Tailored AI solutions trained on your data for specific business challenges."
    }
  ];

  return (
    <>
      <SEO 
        title="AI Development Services | Rajlav Technologies" 
        description="Custom AI solutions, chatbots, machine learning, and automation. Transform your business with intelligent technology."
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            AI <span className="text-primary">Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Harness the power of artificial intelligence to automate workflows, enhance decision-making, and create intelligent customer experiences. We build custom AI solutions tailored to your business needs.
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
              Start Your AI Project
            </Button>
          </div>
        </div>
      </div>
      <CTA />
      <LeadForm />
    </>
  );
}
