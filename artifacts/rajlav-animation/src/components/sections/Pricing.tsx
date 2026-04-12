import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Flame,
  MessageCircle,
  Star,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type BillingMode = "monthly" | "one-time";
type PlanId = "starter" | "growth" | "scale";
type CurrencyCode = "INR" | "USD";

type PlanVariant = {
  name?: string;
  priceInInr: number;
  priceNote?: string;
  priceSuffix: string;
  sublabel: string;
  cta: string;
  urgency?: string;
  emphasis?: string;
  features: string[];
  notIncluded?: string[];
};

type Plan = {
  id: PlanId;
  name: string;
  eyebrow: string;
  positioning: string;
  popular?: boolean;
  tierAccent: string;
  variants: Record<BillingMode, PlanVariant>;
};

const USD_CONVERSION_RATE = 83;

const currencyConfig: Record<CurrencyCode, { locale: string; currency: CurrencyCode }> = {
  INR: { locale: "en-IN", currency: "INR" },
  USD: { locale: "en-US", currency: "USD" },
};

function detectCurrency(): CurrencyCode {
  if (typeof window === "undefined") {
    return "INR";
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  const language = navigator.language?.toLowerCase() ?? "";

  if (
    timezone.includes("Kolkata") ||
    timezone.includes("Calcutta") ||
    language === "en-in" ||
    language.endsWith("-in")
  ) {
    return "INR";
  }

  return "USD";
}

function formatPrice(priceInInr: number, currency: CurrencyCode) {
  const amount = currency === "USD" ? priceInInr / USD_CONVERSION_RATE : priceInInr;

  return new Intl.NumberFormat(currencyConfig[currency].locale, {
    style: "currency",
    currency: currencyConfig[currency].currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

const billingModes: { id: BillingMode; label: string; helper: string }[] = [
  {
    id: "monthly",
    label: "Monthly",
    helper: "Best for teams shipping every month",
  },
  {
    id: "one-time",
    label: "One-Time",
    helper: "Best for launches and campaign sprints",
  },
];

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    eyebrow: "Fast entry point for revenue-focused teams",
    positioning:
      "For teams that need a polished, conversion-focused video without jumping into a bigger production commitment yet.",
    tierAccent: "from-white/8 via-white/4 to-transparent",
    variants: {
      monthly: {
        name: "Starter",
        priceInInr: 15000,
        priceSuffix: "/month",
        sublabel: "Entry plan for testing video marketing without heavy commitment",
        cta: "Start Monthly Plan",
        emphasis: "Lead magnet plan for brands validating what video can do for growth.",
        features: [
          "5 videos per month up to 60 seconds",
          "Basic script support",
          "2 revisions",
          "Standard voiceover",
          "HD export in 1080p",
          "5-7 day delivery",
        ],
        notIncluded: ["Ad cutdowns", "Strategy calls"],
      },
      "one-time": {
        name: "Starter",
        priceInInr: 15000,
        priceSuffix: "one-time",
        sublabel: "Built for first-time clients who need one sharp asset",
        cta: "Get Started",
        emphasis: "Ideal when you want to start simple, look professional, and move fast.",
        features: [
          "1 explainer video up to 60 seconds",
          "Script writing included",
          "2 revisions",
          "HD export",
        ],
        notIncluded: ["Ad cutdowns", "Premium voiceover", "Source files"],
      },
    },
  },
  {
    id: "growth",
    name: "Growth",
    eyebrow: "Built for pipeline, not just pretty visuals",
    positioning:
      "For SaaS teams that want video tied to acquisition, activation, and sales enablement without hiring an in-house motion team.",
    popular: true,
    tierAccent: "from-primary/20 via-primary/8 to-transparent",
    variants: {
      monthly: {
        name: "Growth",
        priceInInr: 35000,
        priceSuffix: "/month",
        sublabel: "Core money plan for brands serious about recurring video output",
        cta: "Choose Growth",
        urgency: "Most teams move here once video becomes part of the funnel",
        emphasis: "Most Popular for teams that want volume, polish, and strategy in one plan.",
        features: [
          "10 videos per month",
          "Full script plus storyboard",
          "2-3 ad cutdowns",
          "Unlimited revisions",
          "Premium voiceover",
          "4K export",
          "Priority support",
          "Strategy guidance",
        ],
        notIncluded: ["Dedicated animator", "Weekly strategy calls"],
      },
      "one-time": {
        name: "Growth Project",
        priceInInr: 35000,
        priceSuffix: "per project",
        sublabel: "Premium project scope for teams ready to push harder",
        cta: "Start Project",
        emphasis:
          "Best when one video needs stronger polish, support assets, and a higher-converting finish.",
        features: [
          "1 premium video up to 90 seconds",
          "Script plus storyboard",
          "2 ad cutdowns",
          "Unlimited revisions",
          "Premium voiceover",
          "4K export",
        ],
        notIncluded: ["Full funnel strategy", "Source files"],
      },
    },
  },
  {
    id: "scale",
    name: "Scale",
    eyebrow: "The monthly lane for serious growth teams",
    positioning:
      "For funded startups, agencies, and GTM teams that need premium video output every month without production bottlenecks.",
    tierAccent: "from-accent/16 via-primary/10 to-transparent",
    variants: {
      monthly: {
        name: "Scale",
        priceInInr: 70000,
        priceNote: "*",
        priceSuffix: "/month",
        sublabel: "High-ticket monthly lane for clients who need speed and full support",
        cta: "Apply For Scale",
        urgency: "Limited slots available",
        emphasis: "For high-ticket clients who need an always-on premium production partner.",
        features: [
          "Unlimited videos",
          "Dedicated animator",
          "48-hour turnaround",
          "Unlimited revisions",
          "Full funnel strategy",
          "Premium voiceover",
          "4K plus source files",
          "Weekly strategy calls",
          "White-label option",
        ],
        notIncluded: [],
      },
      "one-time": {
        name: "Premium Project",
        priceInInr: 60000,
        priceSuffix: "one-time",
        sublabel: "For brands that want a complete premium rollout, not just one video",
        cta: "Book Strategy Call",
        emphasis:
          "Best for high-value campaigns that need multiple assets working together across the funnel.",
        features: [
          "2-3 videos bundle",
          "Full funnel video strategy",
          "Ads plus demo plus onboarding assets",
          "Unlimited revisions",
          "Premium assets plus voiceover",
          "Source files included",
        ],
        notIncluded: [],
      },
    },
  },
];

const comparisonRows = [
  {
    label: "Buying model",
    values: {
      starter: { monthly: "Light monthly support", "one-time": "One-time sprint" },
      growth: { monthly: "Monthly retainer", "one-time": "Per-project rollout" },
      scale: { monthly: "Monthly subscription", "one-time": "Custom inquiry" },
    },
  },
  {
    label: "Best fit",
    values: {
      starter: { monthly: "Testing consistency", "one-time": "One hero asset" },
      growth: { monthly: "Consistent pipeline support", "one-time": "Major launch campaign" },
      scale: { monthly: "Always-on production", "one-time": "Enterprise scope only" },
    },
  },
  {
    label: "Core output",
    values: {
      starter: { monthly: "5 lighter assets monthly", "one-time": "1 conversion video" },
      growth: { monthly: "10 assets monthly", "one-time": "Hero video plus cutdowns" },
      scale: { monthly: "Unlimited multi-asset queue", "one-time": "2-3 video bundle" },
    },
  },
  {
    label: "Strategy depth",
    values: {
      starter: { monthly: "Basic script support", "one-time": "Script writing" },
      growth: { monthly: "Strategy guidance", "one-time": "Script plus storyboard" },
      scale: { monthly: "Full funnel strategy", "one-time": "Full funnel strategy" },
    },
  },
  {
    label: "Turnaround",
    values: {
      starter: { monthly: "5-7 day delivery", "one-time": "Standard sprint" },
      growth: { monthly: "Priority support", "one-time": "Project rollout schedule" },
      scale: { monthly: "48-hour turnaround", "one-time": "Proposal-based" },
    },
  },
];

const faqs = [
  {
    q: "Which option is best if we need one strong video first?",
    a: "If you're starting out, the Starter plan is the fastest way to get a high-converting video without long-term commitment. If you want better results with ads or multiple assets, most teams choose Growth to maximize ROI from the start.",
  },
  {
    q: "Why would a SaaS team choose monthly instead of per project?",
    a: "Monthly works best when video becomes part of your growth engine - not just a one-time asset. It allows faster iteration, consistent messaging, and better performance across ads, onboarding, and sales funnels.",
  },
  {
    q: "What makes Scale different from Growth monthly?",
    a: "Growth is perfect for consistent content and improving conversions. Scale is built for teams that need speed, volume, and a dedicated production system - without hiring in-house.",
  },
  {
    q: "Do you handle script, narrative, and creative direction?",
    a: "Yes - we don't just create videos, we build conversion-focused assets. We handle script, messaging, and creative direction based on your product, audience, and growth goals.",
  },
  {
    q: "Can we start with a one-time project and move into monthly later?",
    a: "Absolutely. Most clients start with a single project to test results, then move into monthly once they see the impact. It's the easiest way to scale video without risk.",
  },
  {
    q: "How do we know video will actually increase conversions?",
    a: "Our videos are designed around conversion psychology, not just visuals. We focus on messaging, clarity, and user behavior - which directly impacts signups, demos, and retention.",
  },
  {
    q: "How fast can we get our first video?",
    a: "Starter projects are typically delivered within 5-7 days. For monthly clients, turnaround is faster with priority production and ongoing support.",
  },
];

const trustStats = [
  { value: "50+", label: "SaaS and digital brands served" },
  { value: "31%", label: "Average lift on conversion-focused pages" },
  { value: "48hr", label: "Fastest active-request turnaround" },
  { value: "High-Ticket", label: "Positioning built for premium buyers" },
];

const trustTestimonials = [
  {
    quote:
      "Growth monthly gave us consistency without sacrificing quality. It felt like we suddenly had a strategist and production team in the room every week.",
    name: "Arjun Mehta",
    role: "Founder, LeadPulse",
    initials: "AM",
  },
  {
    quote:
      "Scale made our brand look more expensive and our launches feel more coordinated. The speed was great, but the strategic clarity was what really changed outcomes.",
    name: "Priya Sharma",
    role: "Head of Growth, StackOps",
    initials: "PS",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-white/8" onClick={() => setOpen(!open)}>
      <div className="flex cursor-pointer items-center justify-between bg-card px-6 py-5 transition-colors hover:bg-white/5">
        <span className="pr-4 text-base font-semibold text-white">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border-t border-white/5 bg-card/60 px-6 py-5 leading-relaxed text-gray-400">
              {a}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function scrollToForm() {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
}

export default function Pricing() {
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  useEffect(() => {
    setCurrency(detectCurrency());
  }, []);

  return (
    <section id="pricing" className="relative overflow-hidden border-y border-white/5 bg-card py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Zap className="h-4 w-4" />
            Hybrid pricing for SaaS teams that buy on outcomes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-5 text-4xl font-extrabold tracking-tighter text-white md:text-6xl"
          >
            Choose the Video Engagement{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              That Matches Your Revenue Stage.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-gray-400"
          >
            Start with a focused one-time asset or lock in a monthly production lane. Every tier is built to raise perceived value, sharpen the message, and turn video into a growth lever.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl"
        >
          <div className="rounded-[30px] border border-white/8 bg-black/20 p-2 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2">
              {billingModes.map((mode) => {
                const active = billingMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setBillingMode(mode.id)}
                    className={`relative overflow-hidden rounded-[22px] px-5 py-4 text-left transition-all duration-300 ${
                      active
                        ? "border border-primary/40 bg-primary/12 text-white"
                        : "border border-transparent bg-transparent text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="pricing-toggle-pill"
                        className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    ) : null}
                    <span className="relative block text-sm font-bold uppercase tracking-[0.2em]">
                      {mode.label}
                    </span>
                    <span className="relative mt-1 block text-sm text-inherit/80">{mode.helper}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mb-10 max-w-5xl rounded-3xl border border-amber-400/15 bg-amber-400/5 px-6 py-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Why the toggle matters
          </p>
          <p className="mt-2 text-base leading-7 text-gray-300">
            One-time is ideal when you need a flagship asset for a launch, pitch, or campaign. Monthly is for teams that already know video drives growth and want speed, consistency, and a dedicated production rhythm.
          </p>
        </div>

        <div className="mx-auto mb-24 grid max-w-6xl gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => {
              const variant = plan.variants[billingMode];

              return (
                <motion.div
                  key={`${plan.id}-${billingMode}`}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14, scale: 0.97 }}
                  transition={{ delay: i * 0.08, duration: 0.28 }}
                  className={`relative flex h-full flex-col rounded-[30px] border p-8 ${
                    plan.popular
                      ? "border-primary/70 bg-background shadow-[0_0_70px_-22px_rgba(124,58,237,0.55)] lg:-my-3 lg:scale-[1.03]"
                      : "border-white/10 bg-background"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-40 rounded-t-[30px] bg-gradient-to-b ${plan.tierAccent}`}
                  />

                  {plan.popular ? (
                    <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(124,58,237,0.6)]">
                      <Flame className="h-3.5 w-3.5" />
                      Most Popular
                    </div>
                  ) : null}

                  <div className="relative z-10 mb-8">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">
                      {plan.eyebrow}
                    </div>
                    <h3 className="mb-2 text-2xl font-extrabold text-white">{variant.name ?? plan.name}</h3>
                    <p className="min-h-[84px] text-sm leading-7 text-gray-400">{plan.positioning}</p>
                  </div>

                  <div className="relative z-10 mb-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                    <div className="mb-2 flex flex-wrap items-end gap-2">
                      <span className="text-5xl font-extrabold tracking-tight text-white">
                        {formatPrice(variant.priceInInr, currency)}
                      </span>
                      {variant.priceNote ? (
                        <span className="pb-1 text-2xl font-bold text-gray-400">{variant.priceNote}</span>
                      ) : null}
                      <span className="pb-1 text-sm text-gray-500">{variant.priceSuffix}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-300">{variant.sublabel}</div>
                    {variant.emphasis ? (
                      <div className="mt-3 text-sm leading-6 text-primary">{variant.emphasis}</div>
                    ) : null}
                  </div>

                  {variant.urgency ? (
                    <div className="relative z-10 mb-6 rounded-2xl border border-amber-400/15 bg-amber-400/5 px-4 py-3 text-sm text-amber-200">
                      {variant.urgency}
                    </div>
                  ) : null}

                  <ul className="relative z-10 mb-8 flex-1 space-y-3.5">
                    {variant.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-200">
                        <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {(variant.notIncluded ?? []).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <X className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gray-700" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    className={`relative z-10 h-13 w-full text-base transition-all ${
                      plan.popular
                        ? "bg-primary text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.5)] hover:bg-primary/90 hover:shadow-[0_0_45px_-5px_rgba(124,58,237,0.7)]"
                        : "border-white/15 text-white hover:border-primary/40 hover:bg-white/5"
                    }`}
                    onClick={scrollToForm}
                  >
                    {variant.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-5xl"
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-white md:text-3xl">
            A buying model designed for how premium SaaS teams actually purchase
          </h3>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-400">
            The layout keeps decisions simple: a lean entry plan, a flexible hybrid growth plan, and a high-touch subscription lane for teams where recurring content is already part of growth.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/8">
            <div className="grid grid-cols-4 border-b border-white/8 bg-card">
              <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Comparison
              </div>
              {["Starter", "Growth", "Scale"].map((name, index) => (
                <div
                  key={name}
                  className={`px-6 py-4 text-center text-sm font-bold ${
                    index === 1 ? "bg-primary/5 text-primary" : "text-white"
                  }`}
                >
                  {name}
                  {index === 1 ? (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                  index % 2 === 0 ? "bg-background" : "bg-card/50"
                }`}
              >
                <div className="px-6 py-4 text-sm font-medium text-gray-300">{row.label}</div>
                {(["starter", "growth", "scale"] as const).map((planId, columnIndex) => (
                  <div
                    key={planId}
                    className={`px-6 py-4 text-center text-sm ${
                      columnIndex === 1 ? "bg-primary/5 font-medium text-primary" : "text-gray-400"
                    }`}
                  >
                    {row.values[planId][billingMode]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-28 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-10 md:p-14">
            <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  UI layout suggestion
                </div>
                <h3 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                  Keep the section premium, clear, and buyer-oriented
                </h3>
                <p className="text-lg leading-relaxed text-gray-400">
                  Lead with the toggle, keep three cards in a single row, and let Growth sit slightly elevated as the default decision path. Add subscription urgency in a subtle banner, not aggressive countdown gimmicks.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "Toggle above cards",
                    "Growth centered and elevated",
                    "Urgency only on monthly tiers",
                    "Benefits before raw feature lists",
                    "Comparison table below cards",
                    "Custom quote CTA after plans",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <Button
                  size="lg"
                  className="h-14 px-8 text-base text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] transition-all hover:bg-accent/90"
                  onClick={scrollToForm}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base text-accent transition-all hover:bg-accent/10"
                  onClick={() =>
                    window.open(
                      "https://wa.me/916205834086?text=Hi! I need a custom animation quote for a SaaS campaign.",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Talk On WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-28 max-w-5xl"
        >
          <h3 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
            Why high-ticket SaaS clients choose this pricing structure
          </h3>

          <div className="mb-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/6 bg-card p-6 text-center"
              >
                <div className="mb-1 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-4xl font-extrabold text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-card-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/15 text-sm font-bold text-primary">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-400">
              Still unsure? Let's map the best video strategy for your product in a quick call.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 text-base text-white shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)] transition-all hover:bg-primary/90"
              onClick={scrollToForm}
            >
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
