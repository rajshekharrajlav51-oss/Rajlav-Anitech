import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stats = [
  { value: "31%", label: "Average Lift In Landing Page Conversion" },
  { value: "22%", label: "Average Increase In Activation Rate" },
  { value: "3.8x", label: "Typical ROAS Improvement On Ad Creatives" },
  { value: "48hrs", label: "To First Script Direction" },
];

const testimonials = [
  {
    quote:
      "Rajlav took a product our prospects found hard to understand and made it feel obvious. Our homepage started converting better within the first week, and sales finally had a video they were proud to send.",
    name: "Sarah Chen",
    role: "CEO",
    company: "FlowStack",
    initials: "SC",
    bg: "from-blue-600 to-primary",
    plan: "SaaS Demo Video",
  },
  {
    quote:
      "The onboarding videos helped new users get to value much faster. We saw fewer repetitive support tickets, better feature adoption, and a noticeably smoother activation experience.",
    name: "Marcus Johnson",
    role: "VP of Product",
    company: "NexusCRM",
    initials: "MJ",
    bg: "from-primary to-accent",
    plan: "Onboarding Series",
  },
  {
    quote:
      "We needed a way to explain AI workflows without sounding technical or generic. Rajlav gave us a narrative our audience understood immediately, and demo requests jumped hard.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "DataSync",
    initials: "ER",
    bg: "from-accent to-violet-600",
    plan: "Explainer Video",
  },
  {
    quote:
      "The 3D launch video changed how prospects perceived the brand. It made us look bigger, sharper, and far more established than competitors in the same space.",
    name: "Arjun Mehta",
    role: "Co-founder",
    company: "CloudPulse",
    initials: "AM",
    bg: "from-emerald-600 to-teal-700",
    plan: "3D Launch Video",
  },
  {
    quote:
      "Their ad creatives gave us better hooks, cleaner messaging, and far more usable variations for paid testing. The result was stronger CTR and a healthier cost per pipeline opportunity.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "LeadPulse",
    initials: "PS",
    bg: "from-rose-600 to-orange-600",
    plan: "Paid Social Ads",
  },
  {
    quote:
      "This was not another vendor delivering pretty visuals and calling it strategy. Rajlav understood positioning, funnel friction, and how to turn one video into an actual sales asset.",
    name: "Daniel Park",
    role: "CMO",
    company: "StackOps",
    initials: "DP",
    bg: "from-violet-600 to-purple-800",
    plan: "Growth Retainer",
  },
];

export default function Trust() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/60 border border-white/6"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Trusted by fast-moving SaaS and app teams
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white"
          >
            Results You Can Feel In The Funnel
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-7 rounded-2xl bg-card border border-card-border hover:border-primary/40 transition-colors group overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <Quote className="w-6 h-6 text-primary/30 mb-3" />

              <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-white font-extrabold text-sm shrink-0 border-2 border-white/10`}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm truncate">{t.name}</div>
                  <div className="text-xs text-gray-400 truncate">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="shrink-0 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary whitespace-nowrap">
                  {t.plan}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
