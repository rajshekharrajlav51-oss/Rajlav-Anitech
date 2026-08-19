import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const WHATSAPP_URL =
  "https://wa.me/916205834086?text=Hi! I want to discuss a software, AI, web, or mobile app project.";

export default function CTA() {
  const openCalendly = () =>
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,95vw)] h-[420px] sm:h-[600px] bg-primary/12 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_75%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-semibold mb-8">
            HAVE A PROJECT IN MIND?
          </div>

          <h2 className="text-[clamp(1.9rem,8vw,4.5rem)] font-extrabold tracking-tighter text-white mb-4 md:mb-6 leading-[1.08]">
            <span className="md:hidden">Have a Project in Mind?</span>
            <span className="hidden md:inline">Let's Build Your Next Digital Product</span>
          </h2>

          <p className="text-sm sm:text-base md:text-xl text-gray-400 mb-7 md:mb-10 max-w-[340px] md:max-w-3xl mx-auto leading-6 md:leading-relaxed">
            <span className="md:hidden">Tell us what you're building. We'll help you plan the next step.</span>
            <span className="hidden md:inline">Whether you have a complete product idea or just a business problem that needs solving, let's discuss it.</span>
          </p>

          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Tell us what you're building",
              "We'll help you figure out the next step",
              "Software, AI, web, mobile and automation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full max-w-[340px] sm:w-auto h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_50px_-5px_rgba(251,191,36,0.5)] hover:shadow-[0_0_70px_-5px_rgba(251,191,36,0.7)] transition-all font-semibold"
              onClick={openCalendly}
            >
              <PhoneCall className="mr-2 w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full max-w-[340px] sm:w-auto h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg border-green-500/40 text-green-400 hover:bg-green-500/10 hover:text-green-300 hover:border-green-500/60 transition-all font-semibold"
              onClick={() =>
                window.open(
                  WHATSAPP_URL,
                  "_blank",
                )
              }
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Talk to Our Team
            </Button>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            Tell us what you're building. We'll help you figure out the next step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
