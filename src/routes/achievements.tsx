import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/PageHeader";
import { AchievementCard } from "@/components/AchievementCard";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/EmptyState";
import { achievementCategories, achievements } from "@/content/achievements";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Appreciation — Nusrat Hossain Runa" },
      {
        name: "description",
        content:
          "Academic milestones, certifications and appreciation collected by Nusrat Hossain Runa.",
      },
      {
        property: "og:title",
        content: "Achievements & Appreciation — Nusrat Hossain Runa",
      },
      {
        property: "og:description",
        content: "Academic milestones, certifications and appreciation worth remembering.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? achievements
        : achievements.filter((a) => a.category === active),
    [active],
  );

  return (
    <>
      <PageHeader
        label="Achievements"
        title="Milestones worth remembering."
        description="Academic achievements, awards, certifications, appreciation and recognition — added here as they happen."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Reveal>
          <div
            role="tablist"
            aria-label="Filter achievements by category"
            className="flex flex-wrap gap-2"
          >
            {achievementCategories.map((category) => {
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
              icon={<Trophy className="size-6" aria-hidden="true" />}
              title="Nothing published here yet"
              description="This section is intentionally empty — achievements, certificates and appreciation will be added here as they are earned."
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((achievement, i) => (
                <Reveal key={achievement.id} delay={i * 70}>
                  <AchievementCard achievement={achievement} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
