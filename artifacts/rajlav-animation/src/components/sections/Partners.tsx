import { motion } from "framer-motion";

const signals = [
  "AI Development",
  "Custom Software",
  "Web Development",
  "Mobile Apps",
  "SaaS Platforms",
  "Business Automation",
  "FinTech",
  "Healthcare",
  "EdTech",
  "Noida",
  "Delhi NCR",
];

export default function Partners() {
  return (
    <section className="py-14 border-y border-white/6 bg-card/40 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-8"
        >
          Rajlav Technologies builds for startups, enterprises, and growing businesses
        </motion.p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card/60 to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
              className="flex gap-6 shrink-0"
            >
              {[...signals, ...signals].map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="shrink-0 px-5 py-2 rounded-full bg-white/4 border border-white/8 text-gray-400 text-sm font-medium whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
