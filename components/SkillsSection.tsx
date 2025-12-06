"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiAndroid,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Firebase: SiFirebase,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "REST API": FaCode,
  Git: SiGit,
  GitHub: SiGithub,
  "Android Kotlin": SiAndroid,
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 shadow-glass mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills & Technologies
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name] || FaCode;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 glass-card rounded-xl glass-hover"
              >
                <Icon className="h-10 w-10 text-primary mb-3" />
                <span className="text-sm text-center text-muted-foreground">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

