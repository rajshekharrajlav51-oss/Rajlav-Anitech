import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const WHATSAPP_URL =
  "https://wa.me/916205834086?text=Hi! I want to discuss a conversion-focused video for my SaaS.";

export default function CTA() {
  const openCalendly = () =>
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0B0F_75%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-sm font-semibold mb-8">
            <Clock className="w-4 h-4" />
            Limited onboarding capacity this month
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.08]">
            Ready to Turn Your Product Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              a Better-Performing Funnel?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            If the product is strong but the message is not landing, this is where we fix it. Book a strategy call and we will map the right video angle for your funnel, audience, and growth goal.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Free strategy call",
              "Video angle within 48 hours",
              "Built for signups, demos, and revenue",
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
              className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_50px_-5px_rgba(124,58,237,0.6)] hover:shadow-[0_0_70px_-5px_rgba(124,58,237,0.8)] transition-all font-semibold"
              onClick={openCalendly}
            >
              <PhoneCall className="mr-2 w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg border-green-500/40 text-green-400 hover:bg-green-500/10 hover:text-green-300 hover:border-green-500/60 transition-all font-semibold"
              onClick={() =>
                window.open(
                  WHATSAPP_URL,
                  "_blank",
                )
              }
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Chat
            </Button>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            We usually reply within 2 hours during business hours in IST.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
