const industries = ["EdTech", "Healthcare", "FinTech", "Startups", "E-commerce", "Professional Services", "Enterprise"];

export default function Industries() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">INDUSTRIES</p>
          <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white">
            Technology for Different Business Needs
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-7">
            We build custom digital solutions for businesses across multiple industries.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm sm:text-base text-gray-300">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
