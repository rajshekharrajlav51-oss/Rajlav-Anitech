import { motion } from "framer-motion";
import { PhoneCall, PenTool, Clapperboard, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Free Strategy Call",
    tagline: "We understand your product & goals",
    desc: "Book a free 30-minute discovery call. We deep-dive into your SaaS product, your target ICP, current funnel bottlenecks, and what a win looks like for you.",
    badge: "No commitment",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Script & Storyboard",
    tagline: "Conversion-focused narrative in 48hrs",
    desc: "Our SaaS writers craft a tight, conversion-optimised script — then our storyboard artists visualise every scene before a single frame is animated.",
    badge: "48hr delivery",
  },
  {
    icon: Clapperboard,
    num: "03",
    title: "Premium Production",
    tagline: "World-class animation, your brand",
    desc: "Our motion design team brings the storyboard to life with premium animation, voiceover, sound design, and visual effects — fully aligned with your brand guidelines.",
    badge: "Unlimited revisions",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch & Optimise",
    tagline: "Ready to deploy across your funnel",
    desc: "You receive export-ready files optimised for every platform — landing pages, YouTube, social ads, in-app, and email. Plus performance tips to maximise ROI.",
    badge: "Multi-platform",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Rocket className="w-3.5 h-3.5" />
            The Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4"
          >
            From Idea to High-Converting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Asset in 4 Steps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A battle-tested production process built for speed, quality, and measurable results.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {/* Animated glow dot */}
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(124,58,237,0.8)]"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group"
            >
              {/* Icon circle */}
              <div className="relative w-20 h-20 mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all z-10">
                <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                {/* Step number */}
                <div className="absolute -top-3 -right-2 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                  {i + 1}
                </div>
              </div>

              {/* Content card */}
              <div className="text-center px-2">
                <div className="inline-flex mb-3 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {step.badge}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs font-semibold text-primary/80 mb-3">{step.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Mobile arrow */}
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
            className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-base shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] transition-all"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start My Free Strategy Call
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
