import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type PortfolioVideoCardProps = {
  title: string;
  description: string;
  mobileDescription?: string;
  caseStudyUrl: string;
  thumbnail: string;
  alt?: string;
  category?: string;
  industry?: string;
  accentClassName?: string;
  tags?: string[];
};

export default function PortfolioVideoCard({
  title,
  description,
  mobileDescription,
  caseStudyUrl,
  thumbnail,
  alt,
  category,
  industry,
  accentClassName = "from-primary/70 via-amber-500/45 to-orange-500/50",
  tags = [],
}: PortfolioVideoCardProps) {
  const handleCardClick = () => {
    window.location.assign(caseStudyUrl);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 18 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group w-full overflow-hidden rounded-[22px] sm:rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_32px_90px_-42px_rgba(251,191,36,0.35)]"
    >
      <button
        type="button"
        onClick={handleCardClick}
        className="block w-full text-left"
        aria-label={`View ${title} case study`}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={alt ?? title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${accentClassName} opacity-70 mix-blend-screen transition-opacity duration-500 group-hover:opacity-90`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,14,0.08),rgba(8,8,14,0.72))]" />

          {(category || industry) && (
            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
              {category ? (
                <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                  {category}
                </span>
              ) : (
                <span />
              )}
              {industry ? (
                <span className="max-w-[52%] truncate rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
                  {industry}
                </span>
              ) : null}
            </div>
          )}

          <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-primary backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3 p-[18px] sm:p-6 md:space-y-4">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] sm:tracking-[0.26em] text-white/45">
            Case Study
          </p>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>
            <p className="max-w-md text-[13px] sm:text-sm md:text-[15px] leading-5 sm:leading-6 text-white/62">
              <span className="md:hidden">{mobileDescription ?? description}</span>
              <span className="hidden md:inline">{description}</span>
            </p>
          </div>

          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View Case Study
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </button>
    </motion.article>
  );
}
