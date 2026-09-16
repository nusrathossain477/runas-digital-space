export type SkillGroupData = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroupData[] = [
  {
    category: "Programming",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Flask"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "CNN",
      "Machine Learning",
      "Computer Vision",
      "Data Processing",
    ],
  },
  {
    category: "Database & Backend",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Authentication",
      "Row Level Security",
      "REST APIs",
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      "OOP",
      "DBMS",
      "Software Engineering",
      "Computer Networks",
      "Data Communication",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "NetBeans",
      "Overleaf",
      "LaTeX",
      "Canva",
    ],
  },
];
