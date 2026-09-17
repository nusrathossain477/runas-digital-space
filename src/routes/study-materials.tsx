import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/PageHeader";
import { MaterialCard } from "@/components/MaterialCard";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/EmptyState";
import { materialCategories, studyMaterials } from "@/content/materials";

export const Route = createFileRoute("/study-materials")({
  head: () => ({
    meta: [
      { title: "Study Materials — Nusrat Hossain Runa" },
      {
        name: "description",
        content:
          "Study notes, summaries and learning resources shared by Nusrat Hossain Runa across AI, networks, software engineering and more.",
      },
      { property: "og:title", content: "Study Materials — Nusrat Hossain Runa" },
      {
        property: "og:description",
        content:
          "Notes, summaries and learning resources organised by subject and shared openly.",
      },
    ],
  }),
  component: StudyMaterialsPage,
});

function StudyMaterialsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? studyMaterials
        : studyMaterials.filter((m) => m.category === active),
    [active],
  );

  return (
    <>
      <PageHeader
        label="Study Materials"
        title="Learn. Organize. Share."
        description="Notes, summaries and resources from my coursework. I only publish materials I own or have permission to share publicly."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Reveal>
          <div
            role="tablist"
            aria-label="Filter materials by category"
            className="flex flex-wrap gap-2"
          >
            {materialCategories.map((category) => {
              const selected = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(category)}
                  className={
                    selected
                      ? "btn btn-primary text-sm"
                      : "chip cursor-pointer px-3.5 py-2"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <EmptyState
              icon={<BookOpen className="size-6" aria-hidden="true" />}
              title="Nothing here yet"
              description="No materials in this category so far. Try another category — more notes are added over time."
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((material, i) => (
                <Reveal key={material.id} delay={i * 70}>
                  <MaterialCard material={material} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
