export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-card border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">ABOUT RAJLAV TECHNOLOGIES</p>
            <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white">
              We Build Technology That Moves Businesses Forward
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background p-6 sm:p-8 text-gray-300 leading-8">
            <p>
              Rajlav Technologies is a technology development company focused on custom software, AI solutions, digital products and business automation.
            </p>
            <p className="mt-5">
              We work with startups, growing businesses and organizations that need technology built around their specific requirements.
            </p>
            <p className="mt-5 text-white font-semibold">
              Understand the problem. Build the right solution. Create technology that can grow with the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
