export const materialCategories = [
  "All",
  "AI / Machine Learning",
  "Computer Networks",
  "Data Communication",
  "Software Engineering",
  "Programming",
  "Database",
  "Other",
] as const;

export type MaterialCategory = Exclude<
  (typeof materialCategories)[number],
  "All"
>;

export type StudyMaterial = {
  id: string;
  title: string;
  category: MaterialCategory;
  topic: string;
  description: string;
  date: string; // ISO date
  /** Put files in public/materials/ and reference them here, e.g. "/materials/notes.pdf" */
  fileUrl?: string;
  fileType?: string;
};

/**
 * Only publish materials you own or have permission to share publicly.
 * Add a file to public/materials/ and set fileUrl to enable View / Download.
 */
export const studyMaterials: StudyMaterial[] = [
  {
    id: "neural-network-backpropagation",
    title: "Neural Network & Backpropagation Notes",
    category: "AI / Machine Learning",
    topic: "Neural Networks",
    description:
      "My own notes on neural network structure and how backpropagation updates weights during training.",
    date: "2026-01-15",
    fileType: "PDF",
  },
  {
    id: "data-communication-notes",
    title: "Data Communication Notes",
    category: "Data Communication",
    topic: "Transmission & Protocols",
    description:
      "Course notes covering data transmission concepts, error control, and protocol behaviour.",
    date: "2026-02-04",
    fileType: "PDF",
  },
  {
    id: "software-engineering-notes",
    title: "Software Engineering Notes",
    category: "Software Engineering",
    topic: "Process & Design",
    description:
      "Summaries of software process models, requirements, and design principles from coursework.",
    date: "2026-02-22",
    fileType: "PDF",
  },
];
