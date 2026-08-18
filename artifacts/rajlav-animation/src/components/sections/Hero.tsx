import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const trustPills = [
  "Custom Software Development",
  "AI Development & Automation",
  "Web & Mobile Apps",
  "SaaS & Digital Platforms",
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[420px] md:h-[500px] bg-primary/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 md:right-1/4 w-[240px] md:w-[400px] h-[240px] md:h-[400px] bg-accent/8 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 md:left-1/4 w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-primary/8 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 py-10 sm:py-12 md:py-16 mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex max-w-full items-center justify-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-200 mb-8 sm:mb-10 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
          AI / Software / Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-[10.5ch] md:max-w-5xl text-[clamp(2rem,7.4vw,5.5rem)] font-extrabold tracking-[-0.025em] md:tracking-[-0.045em] text-white mb-6 leading-[1.1] md:leading-[1.05]"
        >
          <span className="block md:inline">Build Smarter</span>{" "}
          <span className="block md:inline">Digital Products</span>{" "}
          <span className="block md:inline">With AI & Software</span>
          <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
            Rajlav Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] sm:text-base md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-[680px] mx-auto font-normal leading-7 md:leading-relaxed px-1"
        >
          We design and build custom software, AI solutions, web and mobile applications, SaaS platforms, and business automation systems that help companies turn ideas into scalable digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-14"
        >
          <Button
            size="lg"
            className="w-full max-w-[300px] sm:max-w-[320px] sm:w-auto h-12 sm:h-14 px-6 sm:px-9 text-base sm:text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-5px_rgba(251,191,36,0.45)] hover:shadow-[0_0_55px_-5px_rgba(251,191,36,0.65)] transition-all font-semibold"
            onClick={openCalendly}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-[300px] sm:max-w-[320px] sm:w-auto h-12 sm:h-14 px-6 sm:px-9 text-base sm:text-lg border-white/15 text-white hover:bg-white/5 hover:border-primary/40 transition-all font-semibold"
            onClick={() => window.location.assign("/portfolio")}
          >
            <Code2 className="mr-2 w-4 h-4" />
            View Our Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-16"
        >
          {trustPills.map((pill) => (
            <div
              key={pill}
              className="flex min-h-10 items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8 text-xs sm:text-sm text-gray-300"
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
