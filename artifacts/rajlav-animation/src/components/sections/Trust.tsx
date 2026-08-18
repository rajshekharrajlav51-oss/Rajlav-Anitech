import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: CheckCircle2,
    title: "Clear Product Thinking",
    text: "We define workflows, users, integrations and release priorities before development begins.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Engineering",
    text: "We focus on maintainable code, secure access, testing, documentation and deployment support.",
  },
  {
    icon: Sparkles,
    title: "Practical AI & Automation",
    text: "We add AI and automation where it improves real business work, reporting and decision making.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            Why Choose Rajlav Technologies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white"
          >
            Software Built Around Real Business Workflows
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative p-7 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-colors group overflow-hidden"
            >
              <Icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-7">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
