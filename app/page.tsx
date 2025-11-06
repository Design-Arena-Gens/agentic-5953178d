import Link from "next/link";
import { FeatureCard } from "../components/FeatureCard";
import { StepCard } from "../components/StepCard";

const features = [
  {
    icon: "⚡️",
    title: "Autonomous Orchestration",
    description:
      "Compose multi-step workflows that respond to customer intent with guardrails baked into every action."
  },
  {
    icon: "🧠",
    title: "Adaptive Reasoning",
    description:
      "Blend deterministic logic with generative understanding to unlock contextual decision-making at scale."
  },
  {
    icon: "🛡️",
    title: "Observability & Trust",
    description:
      "Stream every insight into a unified timeline with human-friendly explanations and audit-ready logs."
  }
];

const steps = [
  {
    title: "Ideate a Signature Agent Experience",
    detail:
      "Co-design a goal-driven flow that balances automation with human touch points to match your brand tone."
  },
  {
    title: "Prototype in a Day, Iterate in Hours",
    detail:
      "Use pre-built integrations, prompt templates, and stateful memory primitives to rapidly test and refine."
  },
  {
    title: "Launch with Confidence",
    detail:
      "Ship to production with observability dashboards, safe fallbacks, and built-in analytics on day one."
  }
];

const faqs = [
  {
    question: "Can this plug into our existing stack?",
    answer:
      "Absolutely. We layer on top of your existing product, CRM, and data sources with a connector-first mindset."
  },
  {
    question: "How do you keep agents on-brand?",
    answer:
      "We combine tone-of-voice embeddings with structured guardrail policies so every message feels uniquely yours."
  },
  {
    question: "What does engagement look like after launch?",
    answer:
      "You get a dedicated partner team plus self-serve dashboards to monitor performance and roll out new ideas quickly."
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 md:px-12 lg:px-20">
      <header className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-200">
          Agentic Launchpad
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl">
          Build human-grade, always-on agent experiences in record time.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300/80">
          Ship cross-channel conversations, in-product copilots, and automated
          back-office agents without cobbling together brittle tooling. We&apos;ll
          help you orchestrate reasoning, memory, and action blocks that feel
          bespoke to your customers.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
          >
            Schedule a strategy session
          </Link>
          <Link
            href="#capabilities"
            className="rounded-xl border border-slate-600/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-brand-200"
          >
            Explore the playbook
          </Link>
        </div>
      </header>

      <section
        id="capabilities"
        className="grid gap-6 md:grid-cols-3"
        aria-labelledby="capabilities-title"
      >
        <h2 id="capabilities-title" className="sr-only">
          Capabilities
        </h2>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={<span aria-hidden>{feature.icon}</span>}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="glass-card p-10">
          <h2 className="text-3xl font-semibold text-slate-50">
            What your team gets
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-300/80">
            <li>
              <strong className="text-slate-200">Composable blueprints:</strong>{" "}
              Start with proven agent flows that are easy to adapt to your
              business logic.
            </li>
            <li>
              <strong className="text-slate-200">Continuous learning:</strong>{" "}
              Retain context across sessions and trigger guided interventions
              when stakes are high.
            </li>
            <li>
              <strong className="text-slate-200">Clear guardrails:</strong> Set
              up positive playbooks and human-in-the-loop checkpoints to stay in
              control.
            </li>
          </ul>
        </div>
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="glass-card grid gap-10 p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-200">
            Proof of impact
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-50">
            Teams launch faster and iterate with confidence
          </h2>
          <p className="mt-4 text-sm text-slate-300/80">
            From seed-stage startups to enterprise innovation labs, teams use
            our launchpad to turn ideas into production-grade agents. Track
            adoption, measure CSAT uplift, and capture new revenue moments
            without missing a beat.
          </p>
        </div>
        <div className="grid gap-6 text-sm text-slate-300/80">
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/30 p-6">
            “We shipped a multi-channel concierge bot in under three weeks with
            zero production hiccups. The observability tooling let us scale to
            five markets without breaking a sweat.”
            <div className="mt-4 text-slate-200">— Head of Product, Voyage</div>
          </div>
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/30 p-6">
            “The playbooks helped align legal, ops, and eng from day one. We
            finally have agents that feel on-brand and measurable.”
            <div className="mt-4 text-slate-200">
              — Director of CX Automation, Northwind
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <h2 className="text-2xl font-semibold text-slate-50">
          FAQs to help you get started
        </h2>
        <div className="lg:col-span-2 space-y-4">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="glass-card group rounded-2xl border border-transparent p-6 text-sm transition focus-within:border-brand-400/40"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-100">
                {question}
              </summary>
              <p className="mt-3 text-slate-300/80">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-card flex flex-col items-center gap-6 p-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
          Ready when you are
        </span>
        <h2 className="text-3xl font-semibold text-slate-50">
          Let&apos;s co-create your next signature agent
        </h2>
        <p className="max-w-xl text-sm text-slate-300/80">
          Share where you want to start, and we&apos;ll bring the strategy,
          execution, and measurement frameworks to ship faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-brand-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
          >
            Book a kickoff call
          </Link>
          <Link
            href="mailto:hello@agentic.studio"
            className="rounded-xl border border-slate-600/60 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-300/60 hover:text-brand-100"
          >
            hello@agentic.studio
          </Link>
        </div>
      </section>
    </main>
  );
}
