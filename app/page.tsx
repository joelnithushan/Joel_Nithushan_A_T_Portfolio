"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function Home() {
  // Show only web apps (id 1, 4, 5) and limit to 3
  const webApps = projects.filter((project) => 
    project.id === 1 || project.id === 4 || project.id === 5
  );
  const featuredProjects = webApps.slice(0, 3);

  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12 glass-card rounded-2xl p-4 sm:p-6 shadow-glass"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm sm:text-base text-primary hover:text-primary/80 transition-all duration-300 glass px-4 py-2 rounded-lg hover:bg-white/5"
            >
              View All
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          {/* See More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <a
              href="https://github.com/joelnithushan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold glass-card rounded-xl hover:bg-white/5 transition-all duration-300 shadow-glass hover:shadow-glass-lg hover:-translate-y-1 text-primary"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              See More Projects on GitHub
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

