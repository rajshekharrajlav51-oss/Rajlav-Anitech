import { motion } from "framer-motion";

const platforms = [
  { name: "Google", rating: "5.0", icon: "G" },
  { name: "Clutch", rating: "4.9", icon: "C" },
  { name: "Fiverr", rating: "4.8", icon: "F" },
  { name: "Upwork", rating: "4.9", icon: "U" },
  { name: "Trustpilot", rating: "4.8", icon: "T" },
];

const clientNames = [
  "TechFlow", "NexusCRM", "DataSync", "CloudPulse", "StackOps",
  "HireFlow", "PayVault", "LeadPulse", "MetricIO", "DevStack",
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
          Rated top-rated on every major platform
        </motion.p>

        {/* Platform ratings */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2.5 group"
            >
              {/* Platform icon pill */}
              <div className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-sm font-black text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                {p.icon}
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium leading-none mb-1">{p.name}</div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-400 text-xs">★</span>
                  <span className="text-white text-xs font-bold">{p.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling client names ticker */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card/60 to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="flex gap-6 shrink-0"
            >
              {[...clientNames, ...clientNames].map((name, i) => (
                <div
                  key={`${name}-${i}`}
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
