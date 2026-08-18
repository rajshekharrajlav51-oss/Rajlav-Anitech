import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioVideoCard from "@/components/sections/PortfolioVideoCard";
import { portfolio as seoPortfolio } from "@/lib/seo-data";

type Category = "All" | "Web" | "Mobile" | "AI" | "Enterprise";

type PortfolioItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  duration: string;
  metric: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  accentClassName: string;
};

const categories: Category[] = ["All", "Web", "Mobile", "AI", "Enterprise"];

const portfolio: PortfolioItem[] = [
  ...seoPortfolio.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: (
      item.slug === "ai-business-assistant"
        ? "AI"
        : item.slug === "edtech-learning-platform" || item.slug === "payments-inventory"
          ? "Web"
          : "Enterprise"
    ) as Exclude<Category, "All">,
    duration: item.industry,
    metric: item.category,
    description: item.description,
    thumbnail: item.thumbnail,
    videoUrl: `/portfolio/${item.slug}`,
    accentClassName: "from-amber-700/75 via-orange-600/45 to-primary/35",
  })),
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? portfolio : portfolio.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[340px] w-[min(72rem,92vw)] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Featured Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mb-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          >
            Technology Projects That Deliver Real Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            A showcase of software, AI, web, mobile, and enterprise solutions built for startups and growing businesses.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === category
                  ? "border-primary bg-primary text-white shadow-[0_0_30px_-10px_rgba(251,191,36,0.75)]"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioVideoCard
                key={item.id}
                title={item.title}
                metric={item.metric}
                description={item.description}
                videoUrl={item.videoUrl}
                thumbnail={item.thumbnail}
                alt={seoPortfolio.find((portfolioItem) => portfolioItem.title === item.title)?.alt}
                category={item.category}
                duration={item.duration}
                accentClassName={item.accentClassName}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-white/15 bg-white/[0.03] text-white hover:border-primary/40 hover:bg-white/[0.06]"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a Project Like This
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
