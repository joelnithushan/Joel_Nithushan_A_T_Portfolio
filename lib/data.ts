export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
  images?: string[];
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
  { name: "Docker", icon: "Docker" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "Tailwind CSS", icon: "Tailwind" },
  { name: "REST API", icon: "Api" },
  { name: "Git", icon: "Git" },
  { name: "GitHub", icon: "GitHub" },
  { name: "Android Kotlin", icon: "Android" },
  { name: "AWS", icon: "AWS" },
  { name: "n8n", icon: "n8n" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartAgro – AIoT Smart Agriculture Monitoring (Web App)",
    description: "Real-time IoT monitoring system with sensor data visualization, smart alerts, AI chatbot (DeepSeek API), and crop & fertilizer recommendations. Features Twilio and SendGrid integrations.",
    tech: ["MERN", "Firebase RTDB", "ESP32", "DHT11", "Soil Moisture", "MQ135", "DS18B20", "Twilio", "SendGrid"],
    github: "https://github.com/joelnithushan/SmartAgro-AIoT-Based-Smart-Agriculture-Monitoring-System",
    live: "https://example.com",
    image: "/images/projects/smartagro-web/1.png",
    images: [
      "/images/projects/smartagro-web/1.png",
      "/images/projects/smartagro-web/2.jpg",
      "/images/projects/smartagro-web/3.png",
      "/images/projects/smartagro-web/4.png",
      "/images/projects/smartagro-web/5.png",
      "/images/projects/smartagro-web/6.png",
      "/images/projects/smartagro-web/7.png",
      "/images/projects/smartagro-web/8.png",
      "/images/projects/smartagro-web/9.png",
      "/images/projects/smartagro-web/10.png",
      "/images/projects/smartagro-web/11.png",
    ],
  },
  {
    id: 2,
    title: "SmartAgro – Android Mobile App",
    description: "Android mobile application for live irrigation control, device monitoring, and IoT sensor data rendering with real-time Firebase synchronization.",
    tech: ["Kotlin", "Firebase RTDB", "Material 3"],
    github: "https://github.com/joelnithushan/SmartAgro-Android-App",
    live: "https://example.com",
    image: "/images/projects/smartagro-android/1.jpg",
  },
  {
    id: 3,
    title: "VitaTrack – Health & Hydration Tracking App",
    description: "Daily hydration tracking application with progress charts and local data storage using SharedPreferences.",
    tech: ["Kotlin", "Material 3 UI", "SharedPreferences"],
    github: "https://github.com/joelnithushan/VitaTrack-Health-Wellness-Android-App",
    live: "https://example.com",
    image: "/images/projects/vitatrack/1.png",
  },
  {
    id: 4,
    title: "Travely – Online Transport Management (Uber-like)",
    description: "Real-time route tracking system with fare calculation and driver-passenger matching using Google Maps API integration.",
    tech: ["JSP", "Servlets", "MySQL", "Google Maps API"],
    github: "https://github.com/joelnithushan/OOP-Project-Travely-SLIIT",
    live: "https://example.com",
    image: "/images/projects/travely/1.jpg",
    images: [
      "/images/projects/travely/1.jpg",
      "/images/projects/travely/2.jpg",
      "/images/projects/travely/3.jpg",
      "/images/projects/travely/4.jpg",
      "/images/projects/travely/5.jpg",
      "/images/projects/travely/6.jpg",
      "/images/projects/travely/7.jpg",
      "/images/projects/travely/8.jpg",
      "/images/projects/travely/9.jpg",
      "/images/projects/travely/10.jpg",
      "/images/projects/travely/11.jpg",
      "/images/projects/travely/12.jpg",
      "/images/projects/travely/13.jpg",
    ],
  },
  {
    id: 5,
    title: "MediMart – Pharmacy Ordering Web Portal",
    description: "Online pharmacy platform with user authentication, comprehensive medicine catalog, and prescription upload functionality.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/joelnithushan/MediMart-IWT-Project",
    live: "https://example.com",
    image: "/images/projects/medimart/1.jpg",
    images: [
      "/images/projects/medimart/1.jpg",
      "/images/projects/medimart/2.jpg",
      "/images/projects/medimart/3.jpg",
      "/images/projects/medimart/4.jpg",
      "/images/projects/medimart/5.jpg",
      "/images/projects/medimart/6.jpg",
      "/images/projects/medimart/7.jpg",
      "/images/projects/medimart/8.jpg",
      "/images/projects/medimart/9.jpg",
      "/images/projects/medimart/10.jpg",
      "/images/projects/medimart/11.jpg",
    ],
  },
];

