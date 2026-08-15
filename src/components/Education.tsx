import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Education
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">
          Academic background
        </p>

        <div className="flex gap-6 rounded-2xl border border-card-border bg-card p-8">
          <div className="hidden shrink-0 sm:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-muted text-accent">
              <GraduationCap size={28} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 text-accent">{education.institution}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>
            <p className="mt-3 inline-flex rounded-full bg-accent-muted px-3 py-1 text-sm font-medium text-accent">
              CGPA: {education.gpa}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
