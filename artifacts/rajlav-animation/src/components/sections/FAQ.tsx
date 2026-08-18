import { faqs } from "@/lib/seo-data";

export default function FAQ() {
  return (
    <section className="py-28 bg-background border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.24em] mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
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
