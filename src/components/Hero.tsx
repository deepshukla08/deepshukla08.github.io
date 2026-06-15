export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted">
          Full Stack Developer · React.js Specialist · AI Enthusiast
        </div>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            Deep Shukla
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          I build AI-powered products, agentic systems, and scalable web
          applications. Currently focused on LLM-driven workflows and end-to-end
          product delivery.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-card-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-light"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
