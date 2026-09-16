import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-lift group flex h-full flex-col overflow-hidden">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1280}
          height={800}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-[0.68rem]">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="btn btn-primary"
          >
            View Details <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
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
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
