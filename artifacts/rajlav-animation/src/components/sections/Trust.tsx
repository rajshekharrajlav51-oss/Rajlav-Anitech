import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: CheckCircle2,
    title: "Custom Software",
    text: "Business software designed around your processes, users and goals.",
  },
  {
    icon: ShieldCheck,
    title: "AI & Automation",
    text: "AI-powered tools and intelligent workflows that reduce repetitive work and improve decision-making.",
  },
  {
    icon: Sparkles,
    title: "Digital Products",
    text: "Web platforms, mobile apps and SaaS products designed for performance, usability and growth.",
  },
];

export default function Trust() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[min(500px,90vw)] h-[320px] sm:h-[400px] bg-primary/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            WHAT WE BUILD
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white"
          >
            Software Built Around Real Business Workflows
          </motion.h2>
          <p className="mt-5 mx-auto max-w-3xl text-base sm:text-lg text-gray-400 leading-7">
            Your business is unique. Your software should be too.
            We build technology around the way your business actually works, from customer management and automation to payments, analytics, operations and AI-powered workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative w-full p-5 sm:p-7 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-colors group overflow-hidden"
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
