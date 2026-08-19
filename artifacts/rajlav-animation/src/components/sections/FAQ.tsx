import { faqs } from "@/lib/seo-data";

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">FAQ</p>
          <h2 className="text-[clamp(1.9rem,7vw,3.25rem)] font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 ${index > 4 ? "hidden md:block" : ""}`}
            >
              <summary className="cursor-pointer text-white font-semibold">{question}</summary>
              <p className="mt-4 text-gray-400 leading-7">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
