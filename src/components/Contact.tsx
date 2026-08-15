import { Code2, Globe, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "tanjiqur-rahman-prince",
    href: profile.linkedin,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "trPrince",
    href: profile.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mb-8 text-3xl font-bold text-foreground">Get in touch</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={item.label}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
