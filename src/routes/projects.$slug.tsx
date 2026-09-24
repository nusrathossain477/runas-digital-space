import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Github,
  Presentation,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Nusrat Hossain Runa` },
        { name: "description", content: project.shortDescription },
        { property: "og:title", content: `${project.title} — ${project.subtitle}` },
        { property: "og:description", content: project.shortDescription },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-40 pb-24">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">
        This project doesn't exist or hasn't been published yet.
      </p>
      <Link to="/projects" className="btn btn-primary mt-8">
        <ArrowLeft className="size-4" aria-hidden="true" /> All projects
      </Link>
    </div>
  );
}

function Block({
  title,
  items,
}: {
  title: string;
  items?: string[] | undefined;
}) {
  if (!items?.length) return null;
  return (
    <Reveal className="panel p-7">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-accent"
            />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="pb-10">
      <header className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <div className="halo pointer-events-none absolute inset-x-0 -top-32 h-80" />
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All projects
          </Link>

          <Reveal className="mt-8">
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 font-display text-lg text-primary">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.fullDescription ?? project.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Github className="size-4" aria-hidden="true" /> GitHub
                </a>
              ) : null}
              {project.reportUrl ? (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <FileText className="size-4" aria-hidden="true" /> Report
                </a>
              ) : null}
              {project.presentationUrl ? (
                <a
                  href={project.presentationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Presentation className="size-4" aria-hidden="true" /> Presentation
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="panel overflow-hidden p-2">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={800}
            className="aspect-[16/10] w-full rounded-2xl object-cover"
          />
        </Reveal>

        <Reveal className="panel mt-6 p-7">
          <h2 className="text-lg font-semibold">Technology Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        {project.problem ? (
          <Reveal className="panel mt-6 p-7">
            <h2 className="text-lg font-semibold">Problem</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Block title="Objectives" items={project.objectives} />
          <Block title="Features" items={project.features} />
          <Block title="My Contribution" items={project.contribution} />
          <Block title="System Architecture" items={project.architecture} />
          <Block title="Database" items={project.database} />
          <Block title="Challenges" items={project.challenges} />
          <Block title="What I Learned" items={project.learnings} />
          <Block title="Future Improvements" items={project.future} />
        </div>

        {project.screenshots?.length ? (
          <Reveal className="mt-6">
            <h2 className="text-lg font-semibold">Screenshots</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full rounded-2xl border border-border object-cover"
                />
              ))}
            </div>
          </Reveal>
        ) : null}

        {others.length ? (
          <section className="mt-20">
            <div className="hairline" />
            <h2 className="mt-10 text-lg font-semibold">More projects</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: other.slug }}
                    className="panel panel-lift flex items-center justify-between gap-4 p-5"
                  >
                    <span>
                      <span className="block font-medium">{other.title}</span>
                      <span className="block text-xs text-muted-foreground">
                        {other.subtitle}
                      </span>
                    </span>
                    <ExternalLink
                      className="size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}
