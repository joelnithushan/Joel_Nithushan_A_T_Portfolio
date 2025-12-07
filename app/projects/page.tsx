import { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - Joel Nithushan",
  description:
    "Explore the portfolio projects of Joel Nithushan, including web applications, mobile apps, and full-stack solutions.",
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

