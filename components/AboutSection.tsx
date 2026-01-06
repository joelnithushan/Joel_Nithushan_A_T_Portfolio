"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, GraduationCap, School } from "lucide-react";
import Image from "next/image";

const languagesTech = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Kotlin",
  "Firebase RTDB",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Figma",
  "ESP32",
  "C",
  "C++",
  "Python",
  "Postman",
  "Docker",
];

const softSkills = [
  "Communication & Presentation",
  "Critical Thinking",
  "Team Collaboration",
  "Time Management",
  "Innovation & Creativity",
];

const focusAreas = [
  "AIoT (AI + IoT) real-time monitoring",
  "MERN stack applications",
  "Next.js front-end development",
  "Android Kotlin UI + real-time Firebase sync",
  "Prompt engineering + AI tools",
  "Dashboard systems with data visualization",
  "Workflow automation",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Aspiring Software Engineer and BSc (Hons) Software Engineering student with hands-on experience in real-time IoT systems, web development, Android mobile apps, and workflow automation. Skilled in MERN stack development, MongoDB database management, Firebase connectivity, and ESP32 sensor integrations. Passionate about building scalable systems with AI features.
            </p>
          </motion.div>

          {/* Education and Achievements Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass space-y-6"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Education
              </h3>
              
              {/* University Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center border border-white/10">
                    <Image
                      src="/images/about/sliit-logo.png"
                      alt="SLIIT Logo"
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">BSc (Hons) Information Technology</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Software Engineering</p>
                    <p className="text-xs sm:text-sm font-medium mb-1 break-words">Sri Lanka Institute of Information Technology (SLIIT) — Northern Uni</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">CGPA: 3.41 | Nov 2023 – Present</p>
                  </div>
                </div>
              </div>

              {/* School Details */}
              <div className="pt-4 border-t dark:border-white/10 border-black/10 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center border border-white/10">
                    <Image
                      src="/images/about/school-logo.svg"
                      alt="School Logo"
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">G.C.E. Advanced Level</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Physical Science Stream</p>
                    <p className="text-xs sm:text-sm font-medium mb-1 break-words">St. Patrick&apos;s College, Jaffna</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Jan 2019 – Feb 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass"
            >
              <h3 className="text-sm sm:text-base font-semibold mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Highlights & Achievements
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dean&apos;s List – 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Batch Representative — SLIIT Northern Uni</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Professional Focus Areas */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Professional Focus Areas</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {focusAreas.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Languages & Technologies */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Languages & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {languagesTech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="px-2 sm:px-3 py-1 glass text-xs sm:text-sm rounded-lg border border-white/10"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="px-2 sm:px-3 py-1 glass text-xs sm:text-sm rounded-lg border border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
