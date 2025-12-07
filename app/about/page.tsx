import { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

export const metadata: Metadata = {
  title: "About - Joel Nithushan",
  description:
    "Learn more about Joel Nithushan, a Full-Stack Developer with expertise in MERN stack, Firebase, and Android Kotlin.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>
        </div>
      </div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

