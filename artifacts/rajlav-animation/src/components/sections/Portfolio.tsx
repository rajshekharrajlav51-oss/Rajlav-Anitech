import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioVideoCard from "@/components/sections/PortfolioVideoCard";
import { portfolio as seoPortfolio } from "@/lib/seo-data";

type Category = "All" | string;

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  thumbnail: string;
  caseStudyUrl: string;
  accentClassName: string;
  tags?: string[];
  alt?: string;
  mobileDescription?: string;
};

const portfolio: PortfolioItem[] = [
  ...seoPortfolio
    .filter((item) => item.isRealProject)
    .map((item, index) => ({
      id: index + 1,
      title: item.title,
      category: item.category,
      industry: item.industry,
      description: item.description,
      thumbnail: item.thumbnail,
      caseStudyUrl: `/portfolio/${item.slug}`,
      tags: item.tags,
      alt: item.alt,
      mobileDescription: item.mobileDescription,
      accentClassName: "from-amber-700/60 via-orange-600/25 to-primary/20",
    })),
];

const categories: Category[] = ["All", ...Array.from(new Set(portfolio.map((item) => item.category)))];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? portfolio : portfolio.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[340px] w-[min(72rem,92vw)] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
          >
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            REAL PROJECTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mb-4 max-w-4xl text-[clamp(1.75rem,7vw,3.75rem)] font-extrabold tracking-[-0.04em] text-white"
          >
            <span className="md:hidden">Real Rajlav Projects</span>
            <span className="hidden md:inline">Real Rajlav Ecosystem Projects and Case Studies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            <span className="md:hidden">Verified projects from the Rajlav ecosystem.</span>
            <span className="hidden md:inline">Explore the real product ecosystem behind Rajlav Technologies: EdTech, finance, property technology and professional workflow tools.</span>
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
                description={item.description}
                mobileDescription={item.mobileDescription}
                caseStudyUrl={item.caseStudyUrl}
                thumbnail={item.thumbnail}
                alt={item.alt}
                category={item.category}
                industry={item.industry}
                accentClassName={item.accentClassName}
                tags={item.tags}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="w-full max-w-[320px] sm:w-auto border-white/15 bg-white/[0.03] text-white hover:border-primary/40 hover:bg-white/[0.06]"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuss a Similar Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
