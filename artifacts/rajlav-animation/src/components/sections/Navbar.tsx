import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCalendly = () => {
    setMobileOpen(false);
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const isActive = (href: string) => (href === "/" ? location === "/" : location.startsWith(href));

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors relative">
              <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-4.5 h-4.5 text-primary" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white leading-none">
              Rajlav <span className="text-primary">Technologies</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-300 text-xs font-semibold">Noida / Delhi NCR</span>
            <span className="text-gray-500 text-xs">AI & Software Development</span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 right-0 h-px bg-primary transition-transform origin-left ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)] border border-primary/40 transition-all hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.65)] h-9 px-4 text-sm"
              onClick={openCalendly}
            >
              Get Free Consultation
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-background/98 backdrop-blur-xl border-b border-white/8 shadow-xl"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit">
                <span className="text-amber-300 text-xs font-semibold">Noida / Delhi NCR / Remote</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-colors py-2 border-b border-white/5 ${
                    isActive(link.href) ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-white h-12" onClick={openCalendly}>
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
