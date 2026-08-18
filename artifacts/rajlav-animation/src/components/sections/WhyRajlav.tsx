import { motion } from "framer-motion";
import { Layers, Lightbulb, Rocket, Settings2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Business-First Thinking",
    text: "We start with your business goals, users and workflows before choosing the technology.",
  },
  {
    icon: Settings2,
    title: "Modern Technology",
    text: "We use modern frameworks, cloud infrastructure, AI and scalable architectures to build reliable products.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    text: "Our systems are designed to support future users, features, integrations and business growth.",
  },
  {
    icon: Layers,
    title: "One Technology Partner",
    text: "From product strategy and UI/UX to development, deployment and ongoing improvements, everything can be handled under one roof.",
  },
];

export default function WhyRajlav() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">WHY RAJLAV</p>
          <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white">
            From Business Idea to Working Product
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-7">
            We don't just write code. We understand the problem first, design the right solution, and then build technology that can grow with your business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:border-primary/35 transition-colors"
            >
              <Icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-sm sm:text-base leading-7 text-gray-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
