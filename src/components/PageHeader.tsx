import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-14 sm:pt-40">
      <div className="halo pointer-events-none absolute inset-x-0 -top-32 h-80" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">{label}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
