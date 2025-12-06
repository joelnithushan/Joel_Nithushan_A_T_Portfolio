export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "MongoDB", icon: "MongoDB" },
  { name: "Express.js", icon: "Express" },
  { name: "React", icon: "React" },
  { name: "Node.js", icon: "Nodejs" },
  { name: "Firebase", icon: "Firebase" },
  { name: "Next.js", icon: "Nextjs" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "Tailwind CSS", icon: "Tailwind" },
  { name: "REST API", icon: "Api" },
  { name: "Git", icon: "Git" },
  { name: "GitHub", icon: "GitHub" },
  { name: "Android Kotlin", icon: "Android" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Agriculture IoT Dashboard",
    description: "Real-time farm monitoring with sensor data visualizations and admin device management.",
    tech: ["Next.js", "MongoDB", "Firebase", "Tailwind"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, cart management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, drag-and-drop, and team collaboration.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization and reporting.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Real-time weather forecasts with location-based services and interactive maps.",
    tech: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and user authentication.",
    tech: ["Next.js", "MongoDB", "Firebase Auth", "Tailwind"],
    github: "https://github.com/joelnithushan/example",
    live: "https://example.com",
  },
];

