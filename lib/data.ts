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
    title: "SmartAgro – AIoT Smart Agriculture Monitoring (Web App)",
    description: "Real-time IoT monitoring system with sensor data visualization, smart alerts, AI chatbot (DeepSeek API), and crop & fertilizer recommendations. Features Twilio and SendGrid integrations.",
    tech: ["MERN", "Firebase RTDB", "ESP32", "DHT11", "Soil Moisture", "MQ135", "DS18B20", "Twilio", "SendGrid"],
    github: "https://github.com/joelnithushan",
    live: "https://example.com",
    image: "/images/projects/smartagro-web.jpg",
  },
  {
    id: 2,
    title: "SmartAgro – Android Mobile Controller App",
    description: "Android mobile application for live irrigation control, device monitoring, and IoT sensor data rendering with real-time Firebase synchronization.",
    tech: ["Kotlin", "Firebase RTDB", "Material 3"],
    github: "https://github.com/joelnithushan",
    live: "https://example.com",
    image: "/images/projects/smartagro-android.jpg",
  },
  {
    id: 3,
    title: "VitaTrack – Health & Hydration Tracking App",
    description: "Daily hydration tracking application with progress charts and local data storage using SharedPreferences.",
    tech: ["Kotlin", "Material 3 UI", "SharedPreferences"],
    github: "https://github.com/joelnithushan",
    live: "https://example.com",
    image: "/images/projects/vitatrack.jpg",
  },
  {
    id: 4,
    title: "Travely – Online Transport Management (Uber-like)",
    description: "Real-time route tracking system with fare calculation and driver-passenger matching using Google Maps API integration.",
    tech: ["JSP", "Servlets", "MySQL", "Google Maps API"],
    github: "https://github.com/joelnithushan",
    live: "https://example.com",
    image: "/images/projects/travely.jpg",
  },
  {
    id: 5,
    title: "MediMart – Pharmacy Ordering Web Portal",
    description: "Online pharmacy platform with user authentication, comprehensive medicine catalog, and prescription upload functionality.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/joelnithushan",
    live: "https://example.com",
    image: "/images/projects/medimart.jpg",
  },
];

