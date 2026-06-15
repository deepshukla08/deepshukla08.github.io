export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Deep Shukla. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/deepshukla08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/deep-shukla5264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:deepshukla5264@gmail.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
