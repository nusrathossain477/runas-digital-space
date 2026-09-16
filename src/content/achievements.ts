export const achievementCategories = [
  "All",
  "Academic Achievements",
  "Awards",
  "Certifications",
  "Appreciation",
  "Recognition",
  "Scholarships",
  "Other",
] as const;

export type AchievementCategory = Exclude<
  (typeof achievementCategories)[number],
  "All"
>;

export type Achievement = {
  id: string;
  title: string;
  category: AchievementCategory;
  organization: string;
  date: string;
  description: string;
  certificateUrl?: string;
  externalUrl?: string;
};

/**
 * Nothing is invented here. Add real achievements as they happen; the page
 * shows a friendly empty state while this list is empty.
 */
export const achievements: Achievement[] = [];
