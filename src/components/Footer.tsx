import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function Footer() {
  const links = [
    {
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com",
      href: site.contact.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com",
      href: site.contact.github,
      icon: Github,
    },
    {
      label: "Download CV",
      value: "PDF",
      href: site.cvUrl,
      icon: Download,
    },
  ];

  return (
    <footer id="contact" className="relative mt-32 overflow-hidden">
      <div className="halo pointer-events-none absolute inset-x-0 -top-24 h-72" />
      <div className="mx-auto max-w-6xl px-6 pb-12">
        <div className="hairline" />
        <Reveal className="pt-16">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Let's connect and build something meaningful.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
            <p>
              I'm always interested in learning, collaborating, discussing ideas, and
              building something meaningful.
            </p>
            <p>
              Whether it's a project, research opportunity, technical discussion, or
              simply a good conversation about technology — feel free to reach out.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {links.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="panel panel-lift flex items-center gap-3 p-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface-raised/60">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="hairline mt-16" />
        <div className="flex flex-col gap-1 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p>Computer Science & Engineering · {site.university}</p>
        </div>
      </div>
    </footer>
  );
}
