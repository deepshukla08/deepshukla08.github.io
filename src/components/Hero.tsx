export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/dp.jpeg"
            alt="Deep Shukla"
            className="h-32 w-32 rounded-full object-cover border-2 border-accent/50 shadow-lg shadow-accent/10"
          />
        </div>
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
          Full Stack Developer with 3.5+ years specializing in React.js. I build
          scalable web apps end-to-end — and now I&apos;m diving deep into AI,
          agentic systems, and LLM-powered products.
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
