import { ExternalLink } from "lucide-react";
import { experience } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Projects
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">
          Featured work
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {experience.projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-accent-muted hover:text-accent"
                  aria-label={`Visit ${project.name}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <ul className="mb-4 flex-1 list-inside list-disc space-y-1.5 text-sm text-muted">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs text-accent"
                  >
                    {tag}
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
