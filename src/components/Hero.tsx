import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-success" />
          Open to opportunities
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <p className="mb-2 text-xl font-medium text-accent sm:text-2xl">
          {profile.title}
          <span className="text-muted"> · {profile.subtitle}</span>
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
          Automating deployments, orchestrating containerized environments, and
          preparing for AWS Solutions Architect Associate certification.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
