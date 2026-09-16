import { Award, ExternalLink, FileText } from "lucide-react";
import type { Activity } from "@/content/activities";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="panel panel-lift p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="chip">{activity.date}</span>
        {activity.role ? <span className="chip">{activity.role}</span> : null}
      </div>

      <h3 className="mt-4 text-xl font-semibold">{activity.title}</h3>
      <p className="mt-1 text-sm text-primary">{activity.organization}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {activity.description}
      </p>

      {activity.photos?.length ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {activity.photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
            />
          ))}
        </div>
      ) : null}

      {activity.tags?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {activity.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {activity.certificateUrl || activity.reportUrl || activity.externalUrl ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {activity.certificateUrl ? (
            <a
              href={activity.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <Award className="size-4" aria-hidden="true" /> Certificate
            </a>
          ) : null}
          {activity.reportUrl ? (
            <a
              href={activity.reportUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FileText className="size-4" aria-hidden="true" /> Report
            </a>
          ) : null}
          {activity.externalUrl ? (
            <a
              href={activity.externalUrl}
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
