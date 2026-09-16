import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <div className="panel flex flex-col items-center px-6 py-16 text-center">
      {icon ? (
        <span className="mb-5 grid size-14 place-items-center rounded-2xl border border-border bg-surface-raised/60 text-primary">
          {icon}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
