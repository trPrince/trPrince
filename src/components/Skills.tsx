import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Skills
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">
          Tools & technologies
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-card-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-muted px-3 py-1 text-sm text-accent"
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
