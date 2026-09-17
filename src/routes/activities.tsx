import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ActivityCard } from "@/components/ActivityCard";
import { Reveal } from "@/components/Reveal";
import { EmptyState } from "@/components/EmptyState";
import { activities } from "@/content/activities";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Nusrat Hossain Runa" },
      {
        name: "description",
        content:
          "Mentorship, leadership, workshops and volunteering activities of Nusrat Hossain Runa beyond the classroom.",
      },
      { property: "og:title", content: "Activities — Nusrat Hossain Runa" },
      {
        property: "og:description",
        content:
          "Mentorship, events and involvement beyond coursework during my CSE studies.",
      },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <>
      <PageHeader
        label="Activities"
        title="Beyond the classroom."
        description="Mentorship, leadership, workshops, events, volunteering and other involvement that shaped my university journey."
      />

      <section className="mx-auto max-w-4xl px-6 pb-8">
        {activities.length === 0 ? (
          <EmptyState
            icon={<Users className="size-6" aria-hidden="true" />}
            title="No activities added yet"
            description="Activities will appear here as they're documented."
          />
        ) : (
          <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
            {activities.map((activity, i) => (
              <li key={activity.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-7 size-3 rounded-full bg-gradient-accent sm:-left-[2.35rem]"
                />
                <Reveal delay={i * 80}>
                  <ActivityCard activity={activity} />
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}
