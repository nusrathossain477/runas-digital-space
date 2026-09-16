import { Award, ExternalLink } from "lucide-react";
import type { Achievement } from "@/content/achievements";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <article className="panel panel-lift flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{achievement.category}</span>
        <span className="text-xs text-muted-foreground">{achievement.date}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug">
        {achievement.title}
      </h3>
      <p className="mt-1 text-sm text-primary">{achievement.organization}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {achievement.description}
      </p>

      {achievement.certificateUrl || achievement.externalUrl ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {achievement.certificateUrl ? (
            <a
              href={achievement.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <Award className="size-4" aria-hidden="true" /> Certificate
            </a>
          ) : null}
          {achievement.externalUrl ? (
            <a
              href={achievement.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <ExternalLink className="size-4" aria-hidden="true" /> Link
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
