import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

type PortfolioVideoCardProps = {
  title: string;
  metric: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category?: string;
  duration?: string;
  accentClassName?: string;
};

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

export default function PortfolioVideoCard({
  title,
  metric,
  description,
  videoUrl,
  thumbnail,
  category,
  duration,
  accentClassName = "from-primary/70 via-violet-500/45 to-fuchsia-500/50",
}: PortfolioVideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeVideoId = getYouTubeVideoId(videoUrl);
  const embedUrl = youtubeVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`
    : videoUrl;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 18 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_32px_90px_-42px_rgba(124,58,237,0.5)]"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="block w-full text-left"
          aria-label={`Play ${title}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${accentClassName} opacity-80 mix-blend-screen transition-opacity duration-500 group-hover:opacity-95`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(124,58,237,0.24),transparent_32%),linear-gradient(180deg,rgba(8,8,14,0.05),rgba(8,8,14,0.82))]" />

            {(category || duration) && (
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                {category ? (
                  <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                    {category}
                  </span>
                ) : (
                  <span />
                )}
                {duration ? (
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
                    {duration}
                  </span>
                ) : null}
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/60" />
                <span className="absolute inset-0 rounded-full border border-primary/40 group-hover:animate-ping" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:bg-primary/75">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_40px_rgba(124,58,237,0.55)] transition duration-500 group-hover:scale-110">
                    <Play className="ml-1 h-5 w-5 fill-current" />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
                Case Study
              </p>
              <p className="bg-gradient-to-r from-white to-primary bg-clip-text text-sm font-semibold text-transparent sm:text-base">
                {metric}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                {title}
              </h3>
              <p className="max-w-md text-sm leading-6 text-white/62 sm:text-[15px]">
                {description}
              </p>
            </div>
          </div>
        </button>
      </motion.article>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#09090f] shadow-[0_40px_140px_-40px_rgba(0,0,0,0.95)]"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/80 backdrop-blur-md transition hover:border-primary/40 hover:text-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full bg-black">
                {youtubeVideoId ? (
                  <iframe
                    key={embedUrl}
                    src={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video
                    key={videoUrl}
                    src={videoUrl}
                    poster={thumbnail}
                    autoPlay
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
