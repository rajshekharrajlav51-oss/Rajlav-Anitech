import Image from 'next/image'

export const metadata = {
  title: 'AI Development — Rajlav Anitech',
  description: 'Custom AI development: production ML systems, MLOps, LLM integrations, computer vision, and analytics for scalable products.',
  alternates: { canonical: 'https://www.rajlav-anitech.com/services/ai-development' },
  openGraph: { url: 'https://www.rajlav-anitech.com/services/ai-development' },
  twitter: { card: 'summary_large_image' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Development',
  'description': 'Custom AI and ML development including production machine learning, MLOps, LLM integrations, computer vision, and predictive analytics.',
  'provider': { '@type': 'Organization', 'name': 'Rajlav Anitech', 'url': 'https://www.rajlav-anitech.com' }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'How do you start an AI project?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We begin with discovery, data assessment and a small proof-of-concept before scaling to production.' } },
    { '@type': 'Question', 'name': 'What models do you use?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We use a mix of open models and custom architectures depending on performance, cost and privacy needs.' } }
  ]
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rajlav-anitech.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rajlav-anitech.com/services' },
    { '@type': 'ListItem', 'position': 3, 'name': 'AI Development', 'item': 'https://www.rajlav-anitech.com/services/ai-development' }
  ]
}

export default function AiDevelopmentPage() {
  return (
    <section className="container mx-auto py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-white">AI Development Services</h1>
          <p className="mt-4 text-gray-300">Rajlav Anitech delivers production-grade AI solutions that solve meaningful business problems. We partner with product teams to design, build, and operate models and services that power intelligent features, automation, insights, and new product lines.</p>

          <article className="prose prose-invert mt-6 max-w-none">
            <p>
              Our AI development offering focuses on long-term value: measurable outcomes, robust ML pipelines and engineering discipline. We begin every engagement by aligning on the business outcome, collecting and assessing available data, and designing a deliverable roadmap that balances speed with technical risk. We treat models as software — shipping repeatable, testable, monitored systems with clear rollback and retraining strategies.
            </p>

            <h3>What we build</h3>
            <p>
              We deliver components and systems across the ML lifecycle: data collection and labeling workflows, feature stores, experimentation platforms, model training and evaluation, inference services, and MLOps automation. Our engineers implement edge-ready models, server-side inference, and real-time streaming pipelines depending on latency and throughput requirements.
            </p>

            <h3>Large language models & integrations</h3>
            <p>
              From retrieval-augmented generation (RAG) to custom fine-tuning and prompt engineering, we integrate LLM capabilities into search, customer support, content generation, and developer tools. We design cost-aware architectures that use caching, hybrid retrieval, and on-prem or private-hosted models when privacy or latency demands it.
            </p>

            <h3>Computer vision & specialized ML</h3>
            <p>
              Our vision work spans classification, object detection, semantic segmentation and OCR pipelines. We combine classical image processing with deep learning, ensure robust augmentation, and implement efficient inference with model quantization or serverless GPU autoscaling where needed.
            </p>

            <h3>MLOps & reliability</h3>
            <p>
              Production AI requires automation: continuous training, validation gates, drift detection, and explainability reports. We implement CI/CD for models, reproducible training pipelines, and monitoring stacks that surface performance, fairness, and data quality issues in real time. Our MLOps engineers design rollout strategies (canary, shadow, blue/green) and build automated retraining triggers so models remain accurate as data evolves.
            </p>

            <h3>Why Rajlav Anitech</h3>
            <p>
              We blend product sensibility with rigorous engineering. Our teams ship prototypes rapidly and graduate them to resilient services. We prioritize interpretability, cost controls and operational excellence so AI features become reliable differentiators instead of maintenance burdens. We also emphasize data governance and security: encryption, access controls, anonymization, and secure model hosting are part of our default checklist.
            </p>

            <h3>Engagement models & pricing</h3>
            <p>
              Engagements usually start with a focused discovery sprint to validate assumptions and estimate complexity. From there we offer time-and-materials teams, fixed-scope deliverables for well-defined POCs, and managed services for ongoing MLOps. Pricing balances experimentation speed and production risk: early experiments are inexpensive and time-boxed; production-grade features include monitoring, SRE, and ongoing support.
            </p>

            <h3>Process and collaboration</h3>
            <p>
              We embed with product and data teams and use an iterative approach: build small, measure outcomes, and expand. Deliverables include data contracts, reproducible training notebooks, evaluation reports, API specifications, and runbooks. Knowledge transfer is mandatory — we document design decisions, model cards, and provide onboarding sessions to your engineers.
            </p>

            <p>
              If you are evaluating an AI roadmap or need to operationalize previously developed models, our engagement options range from short discovery sprints to full product engineering and ongoing MLOps support. We provide knowledge transfer and runbooks so your team takes full ownership after handoff.
            </p>

          </article>
        </div>
        <div>
          <Image src={'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%230b1220\"/></svg>'} alt="AI development" width={640} height={400} />
        </div>
      </div>
    </section>
  )
}
