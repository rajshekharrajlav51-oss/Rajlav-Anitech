import { motion } from "framer-motion";
import { Layers, Lightbulb, Rocket, Settings2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Business-First",
    text: "We build around your real business needs.",
  },
  {
    icon: Settings2,
    title: "Modern Technology",
    text: "We use practical, scalable technologies.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    text: "Your product can grow with your business.",
  },
  {
    icon: Layers,
    title: "One Technology Partner",
    text: "Design, development and deployment in one place.",
  },
];

export default function WhyRajlav() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">WHY RAJLAV</p>
          <h2 className="text-[clamp(1.75rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white">
            <span className="md:hidden">Why Rajlav Technologies?</span>
            <span className="hidden md:inline">From Business Idea to Working Product</span>
          </h2>
          <p className="mt-4 md:mt-5 max-w-[340px] md:max-w-3xl text-sm sm:text-base md:text-lg text-gray-400 leading-6 md:leading-7">
            <span className="md:hidden">We understand your business first, then build technology around it.</span>
            <span className="hidden md:inline">We don't just write code. We understand the problem first, design the right solution, and then build technology that can grow with your business.</span>
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
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-[18px] sm:p-6 hover:border-primary/35 transition-colors"
            >
              <Icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 md:mb-3">{title}</h3>
              <p className="text-sm sm:text-base leading-6 md:leading-7 text-gray-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
