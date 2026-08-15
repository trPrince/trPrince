import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">Who I am</p>

        <div className="space-y-4 rounded-2xl border border-card-border bg-card p-8">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
