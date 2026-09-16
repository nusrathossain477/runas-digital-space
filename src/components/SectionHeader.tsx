import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </div>
      ) : null}
    </Reveal>
  );
}
