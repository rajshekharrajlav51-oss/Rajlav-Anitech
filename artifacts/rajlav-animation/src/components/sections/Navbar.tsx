import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/anitech_rajlav/new-meeting";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCalendly = () => {
    setMobileOpen(false);
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors relative">
              <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Play className="w-4.5 h-4.5 text-primary fill-primary" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                Rajlav <span className="text-primary">Animation</span>
              </span>
            </div>
          </a>

          {/* Rating badge — desktop */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-amber-300 text-xs font-semibold">4.8 / 5.0</span>
            <span className="text-gray-500 text-xs">· 50+ clients</span>
          </div>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  activeMenu === link.label ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveMenu(link.label)}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-px bg-primary transition-transform origin-left ${
                    activeMenu === link.label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(124,58,237,0.6)] border border-primary/40 transition-all hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.7)] h-9 px-4 text-sm"
              onClick={openCalendly}
            >
              Get Free Consultation
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-background/98 backdrop-blur-xl border-b border-white/8 shadow-xl"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {/* Rating badge — mobile */}
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit">
                <div className="flex">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-amber-300 text-xs font-semibold">4.8 / 5.0 · 50+ clients</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setActiveMenu(link.label);
                  }}
                  className={`text-base font-medium transition-colors py-2 border-b border-white/5 ${
                    activeMenu === link.label ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-white h-12"
                onClick={openCalendly}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
