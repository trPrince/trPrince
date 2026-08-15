import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">Work history</p>

        <div className="rounded-2xl border border-card-border bg-card p-8">
          <div className="mb-6 border-b border-card-border pb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {experience.role}
            </h3>
            <p className="mt-1 text-accent">{experience.company}</p>
            <p className="mt-1 text-sm text-muted">{experience.period}</p>
          </div>

          <div className="space-y-8">
            {experience.projects.map((project) => (
              <article key={project.name}>
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h4>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
                <ul className="mb-3 list-inside list-disc space-y-2 text-sm text-muted">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-card-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
