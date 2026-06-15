export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <div className="h-1 w-16 rounded bg-accent mb-8" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a Full Stack Developer with 3.5+ years of experience,
              specializing in React.js — complex dashboards, real-time
              interfaces, and high-performance apps used by thousands daily.
            </p>
            <p>
              Now actively building in the AI space — multi-agent systems
              with LangGraph, LLM-powered products, and intelligent automation.
              Combining my full stack foundation with agentic AI.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-card-border bg-card p-5">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted">
                AI tools built end-to-end
              </div>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-5">
              <div className="text-2xl font-bold text-accent">3.5+</div>
              <div className="text-sm text-muted">Years of experience</div>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-5">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted">Agentic AI projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
