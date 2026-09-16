import type { SkillGroupData } from "@/content/skills";

export function SkillGroup({ category, skills }: SkillGroupData) {
  return (
    <div className="panel p-6">
      <h3 className="text-sm font-semibold tracking-wide text-foreground">
        {category}
      </h3>
      <div className="hairline my-4" />
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
