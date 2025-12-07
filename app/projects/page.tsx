"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

// Categorize projects
const webApps = projects.filter((project) => 
  project.id === 1 || project.id === 4 || project.id === 5
);
const mobileApps = projects.filter((project) => 
  project.id === 2 || project.id === 3
);

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            web applications, and mobile development.
          </p>
        </div>

        {/* Web Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Web Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {webApps.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Mobile Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Mobile Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {mobileApps.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={webApps.length + index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

