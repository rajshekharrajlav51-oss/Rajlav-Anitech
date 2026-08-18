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
import { services as seoServices } from "@/lib/seo-data";

const services = [
  ...seoServices.map((service, index) => ({
    icon: [Bot, DatabaseZap, Globe, Smartphone, CloudCog, Zap, BarChart3, CloudCog, Globe][index],
    title: service.navTitle,
    tagline: service.title,
    desc: service.summary,
    stat: "Service",
    statLabel: "Rajlav Technologies",
    href: `/services/${service.slug}`,
    color: index % 2 === 0 ? "from-primary/20 to-primary/5" : "from-amber-900/20 to-amber-900/5",
    border: index % 2 === 0 ? "border-primary/20" : "border-amber-700/20",
  })),
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
              onClick={() => window.location.assign(svc.href)}
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
