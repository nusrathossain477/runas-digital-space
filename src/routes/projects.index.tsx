import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/EmptyState";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Nusrat Hossain Runa" },
      {
        name: "description",
        content:
          "Academic and personal projects by Nusrat Hossain Runa, covering web applications, machine learning and data communication.",
      },
      { property: "og:title", content: "Projects — Nusrat Hossain Runa" },
      {
        property: "og:description",
        content:
          "Web applications, machine learning and data communication projects built during my CSE studies.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="Ideas turned into working systems."
        description="A collection of the projects I've built during my Computer Science & Engineering studies — from web platforms to machine learning and network simulations."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8">
        {projects.length === 0 ? (
          <EmptyState
            icon={<FolderOpen className="size-6" aria-hidden="true" />}
            title="No projects published yet"
            description="Projects will appear here once they're added."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
