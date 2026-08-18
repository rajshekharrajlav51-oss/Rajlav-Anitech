const groups = [
  ["Frontend", ["React", "Next.js", "Flutter"]],
  ["Backend", ["Node.js", "NestJS", "Laravel"]],
  ["Database", ["PostgreSQL", "MySQL", "MongoDB"]],
  ["AI", ["OpenAI", "LLM Applications", "AI Automation", "RAG Systems"]],
  ["Infrastructure", ["AWS", "Cloudflare", "Docker", "Cloud Platforms"]],
];

export default function Technology() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-card border-y border-white/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">TECHNOLOGY</p>
          <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tighter text-white">
            Modern Technology. Practical Solutions.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-7">
            We choose technology based on the product's requirements, not because a particular framework is popular.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map(([title, items]) => (
            <article key={title as string} className="rounded-2xl border border-white/10 bg-background p-5">
              <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((item) => (
                  <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
