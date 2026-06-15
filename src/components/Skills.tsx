const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    title: "AI & Agentic Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "Multi-Agent Systems",
      "Tool Calling",
      "RAG",
      "OpenAI",
      "Claude",
      "Gemini",
    ],
  },
  {
    title: "Databases & Infra",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker",
      "CI/CD",
      "Git",
      "GitHub Actions",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <div className="h-1 w-16 rounded bg-accent mb-12" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-card-border bg-card px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
