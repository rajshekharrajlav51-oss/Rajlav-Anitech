import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Flame,
  MessageCircle,
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
    helper: "Best for ongoing product and support teams",
  },
  {
    id: "one-time",
    label: "One-Time",
    helper: "Best for a focused build or launch sprint",
  },
];

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    eyebrow: "Lean technology launch",
    positioning:
      "For founders and small teams that need a professional website, landing page, or focused digital product foundation.",
    tierAccent: "from-white/8 via-white/4 to-transparent",
    variants: {
      monthly: {
        name: "Starter Support",
        priceInInr: 25000,
        priceSuffix: "/month",
        sublabel: "Light monthly support for websites and small business systems",
        cta: "Start Monthly Support",
        emphasis: "Best for maintenance, updates, analytics, and smaller feature improvements.",
        features: [
          "Website and app maintenance",
          "Minor feature improvements",
          "Performance and security checks",
          "Monthly reporting",
          "Priority WhatsApp support",
          "Cloud monitoring support",
        ],
        notIncluded: ["Dedicated developer", "Complex AI modules"],
      },
      "one-time": {
        name: "Starter Build",
        priceInInr: 50000,
        priceSuffix: "starting",
        sublabel: "A focused website or MVP starting point",
        cta: "Start Starter Build",
        emphasis: "Ideal when you need a clean business website, landing page, or lightweight MVP.",
        features: [
          "Business website or landing page",
          "Responsive UI",
          "Contact form integration",
          "Basic SEO setup",
          "Analytics setup",
          "Launch support",
        ],
        notIncluded: ["Mobile app", "Custom ERP workflows"],
      },
    },
  },
  {
    id: "growth",
    name: "Growth",
    eyebrow: "Most popular for scaling businesses",
    positioning:
      "For startups and growing companies that need serious product development across web apps, dashboards, APIs, and integrations.",
    popular: true,
    tierAccent: "from-primary/20 via-primary/8 to-transparent",
    variants: {
      monthly: {
        name: "Growth Partner",
        priceInInr: 75000,
        priceSuffix: "/month",
        sublabel: "Ongoing product development with a reliable technical team",
        cta: "Choose Growth",
        urgency: "Most requested plan for active product teams",
        emphasis: "Best for consistent improvements, integrations, dashboards, and cloud support.",
        features: [
          "Dedicated monthly development hours",
          "Web app and dashboard updates",
          "API and third-party integrations",
          "Cloud deployment support",
          "Bug fixes and QA",
          "Sprint planning",
          "Priority support",
          "Monthly strategy call",
        ],
        notIncluded: ["Full-time dedicated team", "Enterprise SLA"],
      },
      "one-time": {
        name: "Growth Project",
        priceInInr: 200000,
        priceSuffix: "starting",
        sublabel: "A custom web app, dashboard, or automation project",
        cta: "Start Growth Project",
        emphasis:
          "Best when one product needs strong planning, polished UI, backend logic, and integrations.",
        features: [
          "Custom web app or portal",
          "Admin dashboard",
          "Backend and API development",
          "Payment or CRM integration",
          "Responsive UI",
          "QA and deployment",
        ],
        notIncluded: ["Native mobile apps", "Enterprise compliance scope"],
      },
    },
  },
  {
    id: "scale",
    name: "Scale",
    eyebrow: "Enterprise-grade technology execution",
    positioning:
      "For organizations that need complex software, AI systems, mobile apps, ERP, CRM, cloud architecture, or long-term technical partnership.",
    tierAccent: "from-accent/16 via-primary/10 to-transparent",
    variants: {
      monthly: {
        name: "Scale Team",
        priceInInr: 150000,
        priceNote: "+",
        priceSuffix: "/month",
        sublabel: "High-touch product engineering and support",
        cta: "Apply For Scale",
        urgency: "Limited monthly partner slots",
        emphasis: "For businesses that need dependable engineering capacity and strategic technical ownership.",
        features: [
          "Dedicated development capacity",
          "AI solution development",
          "ERP and CRM improvements",
          "Mobile app support",
          "Cloud and DevOps support",
          "Architecture planning",
          "Security and performance reviews",
          "Weekly strategy calls",
          "Priority technical support",
        ],
        notIncluded: [],
      },
      "one-time": {
        name: "Enterprise Project",
        priceInInr: 500000,
        priceNote: "+",
        priceSuffix: "custom quote",
        sublabel: "Large software, AI, mobile, ERP, or transformation scope",
        cta: "Book Discovery Call",
        emphasis:
          "Best for mission-critical builds that need discovery, architecture, milestones, and senior delivery oversight.",
        features: [
          "Custom software build",
          "AI chatbot or GPT-powered system",
          "Mobile app development",
          "ERP or CRM platform",
          "Cloud infrastructure",
          "Documentation and training",
          "Launch and support plan",
        ],
        notIncluded: [],
      },
    },
  },
];

const comparisonRows = [
  {
    label: "Best fit",
    values: {
      starter: { monthly: "Website support", "one-time": "Business website" },
      growth: { monthly: "Product growth", "one-time": "Custom web app" },
      scale: { monthly: "Engineering partner", "one-time": "Enterprise build" },
    },
  },
  {
    label: "Core output",
    values: {
      starter: { monthly: "Maintenance and small updates", "one-time": "Website or MVP" },
      growth: { monthly: "Monthly feature delivery", "one-time": "App, portal, dashboard" },
      scale: { monthly: "Dedicated product execution", "one-time": "AI, ERP, mobile, cloud" },
    },
  },
  {
    label: "Strategy depth",
    values: {
      starter: { monthly: "Basic technical guidance", "one-time": "Launch planning" },
      growth: { monthly: "Sprint planning", "one-time": "Product architecture" },
      scale: { monthly: "Senior technical ownership", "one-time": "Full discovery and roadmap" },
    },
  },
  {
    label: "Support",
    values: {
      starter: { monthly: "Priority WhatsApp", "one-time": "Launch support" },
      growth: { monthly: "Priority product support", "one-time": "Post-launch support" },
      scale: { monthly: "Priority technical support", "one-time": "Custom SLA options" },
    },
  },
];

const faqs = [
  {
    q: "Which plan should I choose for a new website or app?",
    a: "Starter is best for a professional website or lightweight MVP. Growth is better when you need a custom web app, dashboard, backend, integrations, or a product that will keep evolving.",
  },
  {
    q: "Can Rajlav Technologies build AI features into existing software?",
    a: "Yes. We can add AI chatbots, GPT-powered assistants, workflow automation, document processing, recommendations, and predictive features to new or existing systems.",
  },
  {
    q: "Do you provide mobile app development?",
    a: "Yes. We build Android, iOS, and cross-platform apps, including APIs, admin panels, push notifications, analytics, and deployment support.",
  },
  {
    q: "Can you support us after launch?",
    a: "Yes. Monthly plans cover maintenance, improvements, cloud support, bug fixes, monitoring, and ongoing technical guidance.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We support early-stage startups, educational platforms, healthcare providers, finance companies, and enterprise teams that need reliable custom technology.",
  },
];

const trustStats = [
  { value: "AI", label: "Development" },
  { value: "Web", label: "Applications" },
  { value: "SaaS", label: "Platforms" },
  { value: "Noida", label: "Delhi NCR" },
];

const trustTestimonials = [
  {
    quote:
      "Best for teams that need ongoing product development, integrations, dashboards, automation and technical support after launch.",
    name: "Growth Partner",
    role: "Monthly product development",
    initials: "GP",
  },
  {
    quote:
      "Best for defined software, AI, web, mobile or SaaS projects that need discovery, milestones, launch support and documentation.",
    name: "Project Build",
    role: "One-time custom development",
    initials: "PB",
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
    <section id="pricing" className="relative overflow-hidden border-y border-white/5 bg-card py-16 sm:py-20 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] sm:h-[900px] w-[min(900px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] sm:blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
          >
            <Zap className="h-4 w-4" />
            Flexible technology pricing for every growth stage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-5 text-[clamp(1.9rem,7vw,3.75rem)] font-extrabold tracking-tighter text-white"
          >
            Choose the Software Plan{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              That Fits Your Next Build.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 leading-7"
          >
            Start with a focused build or keep a technology team on monthly support. Every plan is structured around scalable software, AI automation, and reliable product delivery.
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
            One-time or monthly
          </p>
          <p className="mt-2 text-base leading-7 text-gray-300">
            One-time is ideal for a defined product build. Monthly is for teams that need continuous product development, support, optimization, and technical ownership.
          </p>
        </div>

        <div className="mx-auto mb-16 sm:mb-24 grid max-w-6xl gap-6 lg:grid-cols-3">
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
                  className={`relative flex h-full flex-col rounded-[24px] sm:rounded-[30px] border p-6 sm:p-8 ${
                    plan.popular
                      ? "border-primary/70 bg-background shadow-[0_0_70px_-22px_rgba(251,191,36,0.45)] lg:-my-3 lg:scale-[1.03]"
                      : "border-white/10 bg-background"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-40 rounded-t-[30px] bg-gradient-to-b ${plan.tierAccent}`}
                  />

                  {plan.popular ? (
                    <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(251,191,36,0.55)]">
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
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
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
                        ? "bg-primary text-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.45)] hover:bg-primary/90 hover:shadow-[0_0_45px_-5px_rgba(251,191,36,0.6)]"
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
            A delivery model designed for modern digital businesses
          </h3>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-400">
            Keep the decision simple: launch lean, build growth systems, or partner with a dedicated technology team for complex AI, app, and enterprise needs.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <div className="min-w-[720px]">
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
                  Need something custom?
                </div>
                <h3 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                  Get a custom roadmap for your software, AI, web, or mobile project
                </h3>
                <p className="text-lg leading-relaxed text-gray-400">
                  Share your goals, workflows, users, and timeline. We will recommend the right architecture, delivery path, and commercial model for your next build.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3">
                <Button
                  size="lg"
                  className="h-14 w-full md:w-auto px-8 text-base text-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.45)] transition-all hover:bg-accent/90"
                  onClick={scrollToForm}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full md:w-auto px-8 text-base text-accent transition-all hover:bg-accent/10"
                  onClick={() =>
                    window.open(
                      "https://wa.me/916205834086?text=Hi! I need a custom quote for a software, AI, web, or mobile app project.",
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
            Why growing businesses choose Rajlav Technologies
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
              Still unsure? Let's map the best technical path for your product in a quick call.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 text-base text-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] transition-all hover:bg-primary/90"
              onClick={scrollToForm}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
