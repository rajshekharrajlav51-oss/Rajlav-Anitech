import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Cuboid,
  Globe,
  Megaphone,
  MonitorPlay,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Explainer Videos",
    tagline: "Make your value obvious in the first 30 seconds.",
    desc: "Clarify what your product does, who it is for, and why it matters, so more visitors understand the offer fast enough to convert.",
    stat: "+31%",
    statLabel: "homepage conversion lift",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: BarChart3,
    title: "SaaS Demo Videos",
    tagline: "Let your product pitch itself at scale.",
    desc: "Show the product in action with a structured narrative that shortens sales conversations and turns curiosity into qualified demand.",
    stat: "2.4x",
    statLabel: "more demo requests",
    color: "from-emerald-900/20 to-emerald-900/5",
    border: "border-emerald-700/20",
  },
  {
    icon: MonitorPlay,
    title: "Onboarding Videos",
    tagline: "Get users to value before they drop off.",
    desc: "Guide users to their first win faster, reduce repetitive support, and improve activation with clear product-led onboarding content.",
    stat: "+22%",
    statLabel: "activation improvement",
    color: "from-accent/15 to-accent/5",
    border: "border-accent/20",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    tagline: "Stop the scroll and sell the next click.",
    desc: "Performance-focused creative for Meta, LinkedIn, YouTube, and short-form placements built to improve hook rate, CTR, and pipeline quality.",
    stat: "3.8x",
    statLabel: "average ROAS improvement",
    color: "from-amber-900/20 to-amber-900/5",
    border: "border-amber-700/20",
  },
  {
    icon: Globe,
    title: "2D Animation",
    tagline: "Simplify the story without losing impact.",
    desc: "Use polished motion design to explain abstract features, workflows, and benefits in a way that feels sharp, modern, and easy to remember.",
    stat: "+41%",
    statLabel: "watch-time improvement",
    color: "from-violet-900/20 to-violet-900/5",
    border: "border-violet-700/20",
  },
  {
    icon: Cuboid,
    title: "3D Animation",
    tagline: "Make the brand feel bigger than the competition.",
    desc: "Create cinematic product visuals and premium launch assets that raise perceived value and make your offer look category-leading from frame one.",
    stat: "$1.2M+",
    statLabel: "pipeline influenced",
    color: "from-sky-900/20 to-sky-900/5",
    border: "border-sky-700/20",
  },
];

export default function Services() {
  return (
    <section id="work" className="py-32 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Zap className="w-3.5 h-3.5" />
            Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-5"
          >
            Video Services Built to
            <br />
            Move Revenue Metrics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Every engagement is built around outcomes: stronger conversions, better activation, sharper positioning, and faster sales momentum.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative p-7 rounded-2xl bg-gradient-to-br ${svc.color} border ${svc.border} hover:border-opacity-60 transition-all group overflow-hidden`}
            >
              <div className="w-12 h-12 rounded-xl bg-background/60 border border-white/8 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>

              <div className="absolute top-5 right-5 text-right">
                <div className="text-xl font-extrabold text-white">{svc.stat}</div>
                <div className="text-[10px] text-gray-500 leading-tight max-w-[90px] text-right">
                  {svc.statLabel}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{svc.title}</h3>
              <p className="text-xs font-semibold text-primary mb-3">{svc.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] transition-all"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See What Fits Your Funnel
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
