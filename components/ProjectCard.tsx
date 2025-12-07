"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
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
      className="glass-card rounded-2xl overflow-hidden glass-hover cursor-pointer group"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image || "/images/projects/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-3"
          whileHover={{ color: "hsl(var(--primary))" }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
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
              className="px-2 py-1 text-xs bg-white/10 rounded-lg border border-white/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Links */}
        <motion.div
          className="flex gap-4"
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
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Github className="h-5 w-5" />
              </motion.div>
              <span>GitHub</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 4, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.div>
              <span>Live Demo</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

