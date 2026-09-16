/**
 * Central place for personal details and links.
 * Replace the placeholder values below with your real ones.
 */
export const site = {
  name: "Nusrat Hossain Runa",
  shortName: "RUNA.",
  role: "Computer Science & Engineering Student",
  university: "Green University of Bangladesh",
  cgpa: "3.75 / 4.00",
  status: "CSE Student · Learning & Building",
  intro:
    "I'm a Computer Science & Engineering student passionate about technology, learning, and building meaningful projects. I enjoy exploring Artificial Intelligence, Cyber Security, Research, and modern technology through hands-on projects and continuous learning.",
  exploring: ["AI", "Machine Learning", "Cyber Security", "Research"],

  // TODO: replace these placeholders with your real contact details.
  contact: {
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
  },

  // Replace the file at public/cv/nusrat-hossain-runa-cv.pdf to update the CV.
  cvUrl: "/cv/nusrat-hossain-runa-cv.pdf",

  // Optional: drop a photo in src/assets and import it where needed.
  profilePhoto: null as string | null,
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Study Materials", to: "/study-materials" },
  { label: "Activities", to: "/activities" },
  { label: "Achievements", to: "/achievements" },
] as const;

export const highlights = [
  { value: "3+", label: "Featured Projects" },
  { value: "3.75 / 4.00", label: "Current CGPA" },
  { value: "2026", label: "Student Mentor" },
  { value: "∞", label: "Things to Learn" },
] as const;

export const expertise = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine learning, neural networks, computer vision, and intelligent systems.",
    icon: "brain",
  },
  {
    title: "Cyber Security",
    description:
      "Secure systems, networks, authentication, privacy, and application security.",
    icon: "shield",
  },
  {
    title: "Research",
    description:
      "Technical exploration, research methodology, experimentation, and problem solving.",
    icon: "microscope",
  },
  {
    title: "Web & Software Development",
    description: "Building practical web applications and software systems.",
    icon: "code",
  },
] as const;

export const education = {
  institution: "Green University of Bangladesh",
  degree: "Bachelor of Science in Computer Science & Engineering",
  cgpaLabel: "Current CGPA: 3.75 / 4.00",
  areas: [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Database Systems",
    "Computer Networks",
    "Data Communication",
    "Object-Oriented Programming",
  ],
} as const;
