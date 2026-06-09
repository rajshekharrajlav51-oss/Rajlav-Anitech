import { SEO } from "@/components/SEO";
import LeadForm from "@/components/sections/LeadForm";

export default function BlogPage() {
  return (
    <>
      <SEO 
        title="Blog | Rajlav Technologies" 
        description="Insights and articles about AI development, software engineering, web technologies, and digital product development."
      />
      <div className="pt-32">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Stay updated with our latest articles on AI development, software engineering best practices, emerging technologies, and digital product insights.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog posts placeholder - can be expanded with actual content */}
            <div className="rounded-lg border border-white/10 p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-400">Blog content is coming soon. Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>
      <LeadForm />
    </>
  );
}
