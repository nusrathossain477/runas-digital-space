export type Activity = {
  id: string;
  title: string;
  role?: string;
  organization: string;
  date: string;
  description: string;
  tags?: string[];
  photos?: { src: string; alt: string }[];
  certificateUrl?: string;
  reportUrl?: string;
  externalUrl?: string;
};

/** Add new activities to the top of this list. */
export const activities: Activity[] = [
  {
    id: "gub-student-mentor-2026",
    title: "Student Mentor",
    role: "Mentor",
    organization: "GUB Student Mentorship Program",
    date: "2026",
    description:
      "Supported junior CSE students through academic guidance, university-related discussions, presentation guidance, and shared experience.",
    tags: ["Mentorship", "Leadership"],
  },
];
