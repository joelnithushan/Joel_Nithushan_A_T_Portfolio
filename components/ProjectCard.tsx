"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProjectImageModal from "./ProjectImageModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (project.images && project.images.length > 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        onClick={handleCardClick}
        className="glass-card rounded-2xl overflow-hidden glass-hover cursor-pointer group h-full flex flex-col"
      >
      {/* Project Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-48 overflow-hidden bg-black/10 flex items-center justify-center flex-shrink-0">
        <Image
          src={project.image || "/images/projects/placeholder.jpg"}
          alt={project.title}
          fill
          className={`${
            project.id === 2 || project.id === 3
              ? "object-cover object-top"
              : "object-cover"
          } group-hover:scale-110 transition-transform duration-300`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
        />
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <motion.h3
          className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 dark:text-white text-black"
          whileHover={{ color: "hsl(var(--primary))" }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.2 },
              }}
              className="px-2 py-1 text-xs bg-white/10 rounded-lg border border-white/20 whitespace-nowrap"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Links */}
        <motion.div
          className="flex gap-3 sm:gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          <motion.div whileHover={{ x: 4, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <span>GitHub</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
              <span>Live Demo</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </motion.div>

      {/* Image Gallery Modal */}
      {project.images && project.images.length > 0 && (
        <ProjectImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          projectTitle={project.title}
          images={project.images}
        />
      )}
    </>
  );
}

