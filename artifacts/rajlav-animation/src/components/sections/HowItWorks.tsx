import { motion } from "framer-motion";
import { PhoneCall, PenTool, Code2, Rocket, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Discover",
    tagline: "Understand the business",
    desc: "We understand your goals and requirements.",
    badge: "Step 01",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    tagline: "Shape the solution",
    desc: "Plan the product experience and architecture.",
    badge: "Step 02",
  },
  {
    icon: Code2,
    num: "03",
    title: "Build",
    tagline: "Develop the product",
    desc: "Develop and test the product.",
    badge: "Step 03",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch",
    tagline: "Prepare for users",
    desc: "Deploy and prepare for users.",
    badge: "Step 04",
  },
  {
    icon: RefreshCw,
    num: "05",
    title: "Improve",
    tagline: "Keep moving forward",
    desc: "Keep improving based on feedback.",
    badge: "Step 05",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,95vw)] h-[420px] sm:h-[600px] bg-primary/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Rocket className="w-3.5 h-3.5" />
            HOW WE WORK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(1.75rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white mb-4"
          >
            <span className="md:hidden">How We Build</span>
            <span className="hidden md:inline">A Simple Process From Idea to Launch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-7"
          >
            <span className="md:hidden">A simple path from idea to launch.</span>
            <span className="hidden md:inline">A practical product delivery process built for clarity, quality and long-term improvement.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative mb-16">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all z-10">
                <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute -top-3 -right-2 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                  {i + 1}
                </div>
              </div>

              <div className="text-center px-2">
                <div className="inline-flex mb-3 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {step.badge}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.num} - {step.title}</h3>
                <p className="text-xs font-semibold text-primary/80 mb-3">{step.tagline}</p>
                <p className="text-gray-400 text-sm leading-6 md:leading-relaxed">{step.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6">
                  <ArrowRight className="w-5 h-5 text-primary/40 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-base shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] transition-all"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start My Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
