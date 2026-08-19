import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";
const trustPills = [
  { desktop: "Custom Software Development", mobile: "Custom Software" },
  { desktop: "AI Development & Automation", mobile: "AI & Automation" },
  { desktop: "Web & Mobile Apps", mobile: "Web & Mobile Apps" },
  { desktop: "SaaS & Digital Platforms", mobile: "SaaS & Digital Platforms" },
];

export default function Hero() {
  const openCalendly = () =>
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  return (
    <section id="home" className="relative flex items-start justify-center overflow-hidden pt-20 md:min-h-[calc(100vh-5rem)]">
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

      <div className="container relative z-10 mx-auto max-w-6xl py-7 sm:py-10 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-200 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shrink-0" />
          AI / Software / Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-3 max-w-[9.5ch] text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[42px] md:mb-4 md:max-w-5xl md:text-[clamp(3.5rem,6.5vw,5.5rem)] md:leading-[1.05] md:tracking-[-0.045em]"
        >
          <span className="block">Build Smarter</span>
          <span className="block">Digital Products</span>
          <span className="mt-2 block text-[0.58em] md:mt-0 md:inline md:text-[1em]">with AI & Software</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mb-5 max-w-[280px] text-[28px] font-extrabold leading-none tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] md:mb-6 md:max-w-5xl md:text-[clamp(3.5rem,6.5vw,5.5rem)]"
        >
            Rajlav Technologies
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-6 max-w-[300px] px-1 text-[15px] leading-[1.5] text-gray-400 md:mb-10 md:max-w-[680px] md:text-xl md:leading-relaxed"
        >
          <span className="md:hidden">Build custom software, AI solutions, web and mobile apps, SaaS platforms and business automation for growing businesses.</span>
          <span className="hidden md:inline">We design and build custom software, AI solutions, web and mobile applications, SaaS platforms, and business automation systems that help companies turn ideas into scalable digital products.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 flex flex-col items-center justify-center gap-3 sm:mb-10 sm:flex-row md:mb-14"
        >
          <Button
            size="lg"
            className="h-[52px] w-full max-w-[280px] px-6 text-base font-semibold text-white bg-primary hover:bg-primary/90 shadow-[0_0_40px_-5px_rgba(251,191,36,0.45)] transition-all sm:max-w-[320px] sm:w-auto sm:px-9 sm:text-lg"
            onClick={openCalendly}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-[52px] w-full max-w-[280px] px-6 text-base font-semibold text-white border-white/15 hover:bg-white/5 hover:border-primary/40 transition-all sm:max-w-[320px] sm:w-auto sm:px-9 sm:text-lg"
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
          className="mb-8 flex flex-wrap items-center justify-center gap-2.5 md:mb-16 md:gap-3"
        >
          {trustPills.map((pill, index) => (
            <div
              key={pill.desktop}
              className={`min-h-9 items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-2 text-xs text-gray-300 md:min-h-10 md:px-4 md:text-sm ${index === 3 ? "hidden md:flex" : "flex"}`}
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="md:hidden">{pill.mobile}</span>
              <span className="hidden md:inline">{pill.desktop}</span>
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
