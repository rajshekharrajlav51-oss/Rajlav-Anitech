import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stats = [
  { value: "100+", label: "Projects Delivered Across Web, App, AI" },
  { value: "50+", label: "Happy Clients And Growing Teams" },
  { value: "10+", label: "Industries Served With Custom Tech" },
  { value: "24/7", label: "Technical Support For Critical Systems" },
];

const testimonials = [
  {
    quote:
      "Rajlav Technologies helped us move from scattered tools to a clean custom platform. The team understood our workflows quickly and shipped a system our staff actually enjoys using.",
    name: "Sarah Chen",
    role: "CEO",
    company: "EduFlow",
    initials: "SC",
    bg: "from-blue-600 to-primary",
    plan: "EdTech Platform",
  },
  {
    quote:
      "Our healthcare operations became far smoother after the new appointment, billing, and reporting modules went live. The automation removed hours of manual follow-up every week.",
    name: "Marcus Johnson",
    role: "VP of Product",
    company: "CareBridge",
    initials: "MJ",
    bg: "from-primary to-accent",
    plan: "Healthcare System",
  },
  {
    quote:
      "They built an AI assistant that handles repetitive customer queries and internal requests with impressive accuracy. It feels like a real operations upgrade, not a gimmick.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "DataOps AI",
    initials: "ER",
    bg: "from-accent to-yellow-600",
    plan: "AI Assistant",
  },
  {
    quote:
      "The CRM platform gave our finance team a single view of leads, documents, onboarding status, and sales activity. We finally have control over the complete customer journey.",
    name: "Arjun Mehta",
    role: "Co-founder",
    company: "FinPulse",
    initials: "AM",
    bg: "from-emerald-600 to-teal-700",
    plan: "Finance CRM",
  },
  {
    quote:
      "Rajlav delivered a fast, polished mobile app with the admin tools we needed behind it. Communication was clear and the product felt premium from the first release.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "RetailLoop",
    initials: "PS",
    bg: "from-rose-600 to-orange-600",
    plan: "Mobile App",
  },
  {
    quote:
      "They modernized our internal ERP without overcomplicating the rollout. Reporting, approvals, and daily operations now move through one reliable system.",
    name: "Daniel Park",
    role: "CMO",
    company: "StackWorks",
    initials: "DP",
    bg: "from-yellow-600 to-orange-800",
    plan: "Enterprise ERP",
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
            Trusted by startups, enterprises, and growing businesses
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white"
          >
            Results You Can Measure In Your Operations
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
