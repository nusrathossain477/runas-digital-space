import worknestImage from "@/assets/project-worknest.jpg";
import plantImage from "@/assets/project-plant-disease.jpg";
import ambulanceImage from "@/assets/project-smart-ambulance.jpg";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  problem?: string;
  objectives?: string[];
  features?: string[];
  contribution?: string[];
  architecture?: string[];
  database?: string[];
  challenges?: string[];
  learnings?: string[];
  future?: string[];
  screenshots?: { src: string; alt: string }[];
  githubUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
  presentationUrl?: string;
};

/**
 * Add new projects here. Anything left undefined simply won't be rendered,
 * so you can fill in details over time.
 */
export const projects: Project[] = [
  {
    slug: "worknest",
    title: "WorkNest",
    subtitle: "Smart Company Management System",
    category: "Web Application",
    featured: true,
    image: worknestImage,
    imageAlt: "Abstract dark dashboard concept representing the WorkNest management system",
    shortDescription:
      "A smart workplace management platform designed to streamline company operations through task management, attendance, notifications, feedback, and role-based access.",
    fullDescription:
      "WorkNest is a smart workplace management platform designed to streamline company operations. It brings task management, attendance, notifications, feedback, and role-based access together in one place so teams can coordinate day-to-day work through a single system.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    problem:
      "Company operations are often spread across disconnected tools, which makes tasks, attendance, and internal communication difficult to track in one place.",
    objectives: [
      "Centralise everyday company operations in a single platform",
      "Manage tasks and attendance with clear ownership",
      "Deliver notifications and feedback inside the same system",
      "Separate capabilities through role-based access",
    ],
    features: [
      "Task management",
      "Attendance tracking",
      "Notifications",
      "Feedback",
      "Role-based access control",
    ],
    contribution: [
      "Designed and built the web interface with React, TypeScript, and Tailwind CSS",
      "Modelled and implemented the data layer on Supabase with PostgreSQL",
      "Implemented role-based access across the application",
      "Deployed and maintained the application on Vercel",
    ],
    architecture: [
      "React + TypeScript single-page front end",
      "Supabase as the backend service layer (database, authentication)",
      "PostgreSQL as the relational data store",
      "Vercel for deployment",
    ],
    database: [
      "Relational schema on PostgreSQL managed through Supabase",
      "Role-based access rules to separate permissions per user role",
    ],
    challenges: [
      "Keeping role-based permissions consistent across every feature",
      "Designing a data model that supports tasks, attendance, and feedback together",
    ],
    learnings: [
      "Practical experience designing relational schemas for a real workflow",
      "Building an application with authentication and role-based access end to end",
    ],
    future: [
      "Richer reporting and analytics views",
      "More granular notification preferences",
    ],
    // Add links when available:
    // githubUrl: "",
    // liveUrl: "",
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    subtitle: "CNN-based Plant Disease Classification",
    category: "Machine Learning",
    featured: true,
    image: plantImage,
    imageAlt: "Abstract leaf overlaid with a glowing neural network mesh",
    shortDescription:
      "A CNN-based machine learning application that classifies plant leaf images into disease categories through a Flask web interface.",
    fullDescription:
      "A machine learning application that classifies plant leaf images into disease categories using a convolutional neural network, served to users through a Flask web interface.",
    technologies: ["Python", "TensorFlow", "CNN", "Flask", "NumPy", "Pillow"],
    objectives: [
      "Train a convolutional neural network to classify plant leaf images",
      "Expose the trained model through a simple web interface",
    ],
    features: [
      "Leaf image upload",
      "CNN-based disease classification",
      "Flask web interface for predictions",
    ],
    contribution: [
      "Prepared and processed the image dataset",
      "Built and trained the CNN model with TensorFlow",
      "Developed the Flask interface for uploading images and viewing predictions",
    ],
    learnings: [
      "Image preprocessing and dataset handling for computer vision",
      "Training, evaluating, and serving a CNN model",
    ],
  },
  {
    slug: "smart-ambulance",
    title: "Smart Ambulance",
    subtitle: "Go-Back-N ARQ Data Communication Simulation",
    category: "Data Communication",
    featured: true,
    image: ambulanceImage,
    imageAlt:
      "Abstract diagram of numbered data packets travelling with retransmission arcs",
    shortDescription:
      "A Java-based simulation demonstrating reliable data transmission using Go-Back-N ARQ, including packet loss, acknowledgements, and retransmission.",
    fullDescription:
      "A Java-based simulation that demonstrates reliable data transmission using the Go-Back-N ARQ protocol, covering packet loss, acknowledgements, and retransmission behaviour.",
    technologies: ["Java", "NetBeans", "Go-Back-N ARQ", "Data Communication"],
    features: [
      "Sliding window transmission",
      "Simulated packet loss",
      "Acknowledgement handling",
      "Retransmission of lost frames",
    ],
    contribution: [
      "Implemented the Go-Back-N ARQ logic in Java",
      "Simulated packet loss, acknowledgements, and retransmission flows",
    ],
    learnings: [
      "How sliding-window protocols recover from packet loss",
      "Translating a data communication concept into working code",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
