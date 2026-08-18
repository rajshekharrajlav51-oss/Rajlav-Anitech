import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const trustPills = [
  "Custom Software Development",
  "AI Development & Automation",
  "Web & Mobile App Development",
  "SaaS & Platform Development",
];

export default function Hero() {
  const openCalendly = () =>
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-start justify-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_30%,#050505_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 py-12 md:py-16 mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-200 mb-10 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
          Rajlav Technologies serves Noida, Delhi NCR, and remote clients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05]"
        >
          AI & Software Development Company in Noida
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
            Rajlav Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto font-normal leading-relaxed"
        >
          We help startups, educational platforms, healthcare providers, finance companies, and enterprises build AI development, custom software development, web development, mobile app development, SaaS development, FinTech solutions, healthcare technology, EdTech solutions, and business automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-9 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-5px_rgba(251,191,36,0.45)] hover:shadow-[0_0_55px_-5px_rgba(251,191,36,0.65)] transition-all font-semibold"
            onClick={openCalendly}
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-9 text-lg border-white/15 text-white hover:bg-white/5 hover:border-primary/40 transition-all font-semibold"
            onClick={() => window.location.assign("/portfolio")}
          >
            <Code2 className="mr-2 w-4 h-4" />
            View Portfolio
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {trustPills.map((pill) => (
            <div
              key={pill}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8 text-sm text-gray-300"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              {pill}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
