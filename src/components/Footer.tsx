import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js &middot; Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
