import { Download, Eye, FileText } from "lucide-react";
import type { StudyMaterial } from "@/content/materials";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function MaterialCard({ material }: { material: StudyMaterial }) {
  const available = Boolean(material.fileUrl);

  return (
    <article className="panel panel-lift flex h-full flex-col p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-surface-raised/60">
          <FileText className="size-5 text-primary" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="eyebrow text-[0.66rem]">{material.category}</p>
          <h3 className="mt-2 text-lg font-semibold leading-snug">
            {material.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {material.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="chip">{material.topic}</span>
        {material.fileType ? <span className="chip">{material.fileType}</span> : null}
        <span className="ml-auto">{formatDate(material.date)}</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {available ? (
          <>
            <a
              href={material.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Eye className="size-4" aria-hidden="true" /> View
            </a>
            <a href={material.fileUrl} download className="btn btn-ghost">
              <Download className="size-4" aria-hidden="true" /> Download
            </a>
          </>
        ) : (
          <p className="text-xs text-muted-foreground">
            File not uploaded yet — add it to <code>public/materials/</code> and set
            the link.
          </p>
        )}
      </div>
    </article>
  );
}
