"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 shadow-glass-lg max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-primary">Joel Nithushan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8"
          >
            <span className="block sm:inline">Software Developer Intern</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">MERN | Firebase | Android Kotlin</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base glass-strong text-primary-foreground rounded-xl font-semibold hover:bg-primary/20 transition-all duration-300 shadow-glass hover:shadow-glass-lg hover:-translate-y-1 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base glass text-foreground rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 shadow-glass hover:shadow-glass-lg hover:-translate-y-1 w-full sm:w-auto"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

