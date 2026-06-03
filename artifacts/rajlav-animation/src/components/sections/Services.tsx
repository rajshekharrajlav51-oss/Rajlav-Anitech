import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CloudCog,
  DatabaseZap,
  Globe,
  Smartphone,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    tagline: "High-performance web products built to scale.",
    desc: "Custom business websites, SaaS platforms, admin dashboards, and enterprise portals designed for performance and scalability.",
    stat: "100+",
    statLabel: "projects delivered",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Modern apps for Android, iOS, and cross-platform launches.",
    desc: "Android, iOS, and cross-platform applications built with modern frameworks and optimized user experience.",
    stat: "2x",
    statLabel: "faster release cycles",
    color: "from-amber-900/20 to-amber-900/5",
    border: "border-amber-700/20",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    tagline: "Intelligent systems that automate real work.",
    desc: "AI chatbots, AI assistants, workflow automation, predictive systems, and GPT-powered applications.",
    stat: "24/7",
    statLabel: "automation support",
    color: "from-accent/15 to-accent/5",
    border: "border-accent/20",
  },
  {
    icon: DatabaseZap,
    title: "ERP & CRM Systems",
    tagline: "Software tailored to the way your business operates.",
    desc: "Custom ERP, CRM, HRMS, and business management software tailored to your operations.",
    stat: "10+",
    statLabel: "industries served",
    color: "from-amber-900/20 to-amber-900/5",
    border: "border-amber-700/20",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    tagline: "Secure infrastructure for reliable digital products.",
    desc: "Secure deployment, cloud infrastructure, CI/CD pipelines, server management, and performance optimization.",
    stat: "99.9%",
    statLabel: "uptime-focused builds",
    color: "from-yellow-900/20 to-yellow-900/5",
    border: "border-yellow-700/20",
  },
  {
    icon: BarChart3,
    title: "Digital Transformation",
    tagline: "Digitize operations and remove growth bottlenecks.",
    desc: "Business automation, third-party integrations, process digitization, and operational efficiency solutions.",
    stat: "+35%",
    statLabel: "efficiency gains",
    color: "from-orange-900/20 to-orange-900/5",
    border: "border-orange-700/20",
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
            Technology Services Built To
            <br />
            Accelerate Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            From custom software to AI automation, we create scalable digital solutions that improve efficiency, customer experience, and revenue.
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
            className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] transition-all"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuss Your Technology Roadmap
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
