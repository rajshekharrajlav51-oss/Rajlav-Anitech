import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioVideoCard from "@/components/sections/PortfolioVideoCard";

type Category = "All" | "Explainer" | "SaaS Demo" | "Ads" | "2D / 3D";

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

const categories: Category[] = ["All", "Explainer", "SaaS Demo", "Ads", "2D / 3D"];

function getYouTubeThumbnail(url: string) {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v");
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  } catch {
    return "";
  }
}

const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Lion & Elephant Jungle Adventure",
    category: "2D / 3D",
    duration: "Kids Story",
    metric: "2D / 3D Animation",
    description: "A playful jungle adventure crafted with character-led storytelling, bright motion, and kid-friendly pacing.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/yOgYQ5pBdv4"),
    videoUrl: "https://youtu.be/yOgYQ5pBdv4",
    accentClassName: "from-amber-700/75 via-orange-600/45 to-primary/35",
  },
  {
    id: 2,
    title: "School Life Lesson",
    category: "Explainer",
    duration: "Moral Story",
    metric: "Explainer Video",
    description: "A school-themed moral story designed to keep young viewers engaged while landing the lesson clearly.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/SuLhpKW8fS4"),
    videoUrl: "https://youtu.be/SuLhpKW8fS4",
    accentClassName: "from-indigo-700/75 via-primary/55 to-violet-500/45",
  },
  {
    id: 3,
    title: "SaaS Product Explainer Video",
    category: "SaaS Demo",
    duration: "eCommerce App",
    metric: "Boost Conversions",
    description: "A conversion-focused SaaS explainer built to clarify the product fast and make the value proposition stick.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/bIBbBhmI-Fs"),
    videoUrl: "https://youtu.be/bIBbBhmI-Fs",
    accentClassName: "from-violet-700/75 via-fuchsia-600/45 to-primary/40",
  },
  {
    id: 4,
    title: "This AI Study Tool Will Change How You Learn Forever",
    category: "SaaS Demo",
    duration: "AI Product",
    metric: "SaaS Demo",
    description: "A modern product story that frames an AI learning tool with fast hooks, clarity, and premium motion language.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/sigKc6ZFSFo"),
    videoUrl: "https://youtu.be/sigKc6ZFSFo",
    accentClassName: "from-sky-700/70 via-indigo-700/40 to-primary/30",
  },
  {
    id: 5,
    title: "Amazing Salt Water Experiment",
    category: "Explainer",
    duration: "Learning Video",
    metric: "Kids Explainer",
    description: "An educational explainer that turns a simple science concept into an easy-to-follow, visual learning moment.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/NdXOkclJ09E"),
    videoUrl: "https://youtu.be/NdXOkclJ09E",
    accentClassName: "from-slate-700/75 via-violet-700/45 to-primary/35",
  },
  {
    id: 6,
    title: "Luxury Brand Ad Video",
    category: "Ads",
    duration: "3D Showcase",
    metric: "Premium Ad",
    description: "A glossy luxury-style motion piece with premium lighting, product focus, and high-end brand energy.",
    thumbnail: "/portfolio-luxury-brand-ad.svg",
    videoUrl: "https://youtu.be/GAM4qcvuhrI",
    accentClassName: "from-orange-700/75 via-rose-700/45 to-red-500/35",
  },
  {
    id: 7,
    title: "Night Adventure Story",
    category: "2D / 3D",
    duration: "Story Animation",
    metric: "2D / 3D Animation",
    description: "A night-themed animated story blending expressive scenes, character motion, and a fun narrative tone.",
    thumbnail: getYouTubeThumbnail("https://youtu.be/w3e7kr_lXP8"),
    videoUrl: "https://youtu.be/w3e7kr_lXP8",
    accentClassName: "from-fuchsia-800/75 via-purple-700/45 to-primary/35",
  },
  {
    id: 8,
    title: "Cinematic Product Commercial",
    category: "Ads",
    duration: "Animation Ad",
    metric: "Product Commercial",
    description: "A cinematic ad built for premium brand perception with sleek animation, atmosphere, and product-first framing.",
    thumbnail: "/portfolio-cinematic-product.svg",
    videoUrl: "https://www.youtube.com/watch?v=GAM4qcvuhrI",
    accentClassName: "from-emerald-700/70 via-cyan-700/35 to-primary/25",
  },
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
            Premium Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mb-4 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          >
            Video Case Studies That Feel Premium Before the Play Click
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            A modern SaaS-style showcase built with cinematic thumbnails, strong result framing, and instant video playback in a polished modal.
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
                  ? "border-primary bg-primary text-white shadow-[0_0_30px_-10px_rgba(124,58,237,0.9)]"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioVideoCard
                key={item.id}
                title={item.title}
                metric={item.metric}
                description={item.description}
                videoUrl={item.videoUrl}
                thumbnail={item.thumbnail}
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
            Build a Portfolio Like This
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
