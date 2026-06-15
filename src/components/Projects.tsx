const projects = [
  {
    title: "ROFY AI",
    description:
      "AI coding agent platform — users describe what they want in natural language, and ROFY's LangGraph agent generates complete full-stack applications with real-time preview, GitHub sync, and iterative refinement through conversation.",
    tech: ["React", "NestJS", "Python", "LangGraph", "Kubernetes", "Langfuse"],
    highlights: [
      "LangGraph agent with 35+ tools (file ops, bash, DB, web search, screenshots)",
      "6 specialized skills: Design, Image Gen, Screenshot Verify, Testing (Playwright), Security, Support (RAG)",
      "Smart model routing (Opus/Sonnet) based on task complexity + cache state",
      "MCP sandbox server with Kubernetes-isolated environments & checkpoint/restore",
      "Session Knowledge Graph for token-efficient cold-start recovery",
      "Anthropic prompt cache warmer — 24/7 service for 90% cheaper inference",
    ],
    link: null,
    github: null,
    type: "Professional",
  },
  {
    title: "ReelUp AI Platform",
    description:
      "AI content generation platform with 16 full-page tools — AI Ad Studio, Fashion Engine, Image Editor, Multi-Angle Shots, Visual Canvas, Video Generation, Influencer Studio, and more. Processes thousands of async jobs daily across 20+ Redis/ARQ workers.",
    tech: ["Next.js", "Python", "FastAPI", "Redis", "PostgreSQL", "AWS"],
    highlights: [
      "6 LangGraph agent workflows: UGC Generator, Script Gen, Selfie UGC, Talking Head, Fashion Try-On",
      "16 full-page UIs: Ad Studio, Fashion Engine (8-step wizard), Image Editor (mask canvas), Visual Canvas (React Flow node editor)",
      "15+ AI provider integrations: GPT Image 2, Seedance 2.0, Kling V3, HeyGen, Creatify, Topaz, FLUX 2",
      "Generation orchestrator with idempotency, concurrency limits, and SSE progress streaming",
      "Lot-based credit system with atomic PostgreSQL, priority draining & automatic refunds",
      "Feature-driven frontend: Zustand stores, React Query, WebSocket real-time updates, reusable component library",
    ],
    link: null,
    github: null,
    type: "Professional",
  },
  {
    title: "Travel Agent System",
    description:
      "Multi-agent travel planning system where specialized AI agents collaborate to plan complete trips — flights, hotels, activities, and itineraries — through natural conversation.",
    tech: ["Node.js", "Express", "LangGraph", "LangChain", "MongoDB", "React"],
    highlights: [
      "Multi-agent orchestration with LangGraph",
      "Specialized agents for flights, hotels, activities",
      "Persistent conversation memory",
      "Real-time streaming responses",
    ],
    link: null,
    github: "https://github.com/deepshukla08/travel-agent-system",
    type: "Personal",
  },
  {
    title: "Order Support Agent",
    description:
      "Agentic AI customer support system that handles order queries — tracking, cancellations, refunds, damaged items, address changes, and invoice requests — all through natural language.",
    tech: ["Node.js", "Express", "LangGraph", "LangChain", "React", "Zod"],
    highlights: [
      "Intent classification and routing",
      "Tool-calling for order operations",
      "Multi-turn conversation handling",
      "Structured output validation with Zod",
    ],
    link: null,
    github: "https://github.com/deepshukla08/order-support-agent",
    type: "Personal",
  },
  {
    title: "GitHub Repo Fixer Agent",
    description:
      "An AI agent that clones public repos, detects build errors, analyzes them, generates fixes, reviews its own output, and applies verified patches — fully autonomously.",
    tech: ["Node.js", "LangGraph", "LangChain", "React", "simple-git"],
    highlights: [
      "9-node agent graph (analyze → find → plan → code → review)",
      "Self-healing: re-runs build after applying fix",
      "Diff generation and plain-English summaries",
      "Per-repo memory for learning patterns",
    ],
    link: null,
    github: "https://github.com/deepshukla08/github-repo-fixer",
    type: "Personal",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="h-1 w-16 rounded bg-accent mb-12" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-light">
                  {project.type}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent-light"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mb-5 space-y-1.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-card-border bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {t}
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
