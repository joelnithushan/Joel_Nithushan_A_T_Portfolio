import { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About - Joel Nithushan",
  description:
    "Learn more about Joel Nithushan, a Full-Stack Developer with expertise in MERN stack, Firebase, and Android Kotlin.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="glass-card rounded-2xl p-8 shadow-glass text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Me
          </h1>
        </div>
      </motion.div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

