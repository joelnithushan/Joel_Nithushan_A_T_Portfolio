import { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Projects - Joel Nithushan",
  description:
    "Explore the portfolio projects of Joel Nithushan, including web applications, mobile apps, and full-stack solutions.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="glass-card rounded-2xl p-8 shadow-glass text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            web applications, and mobile development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

