"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground leading-relaxed shadow-glass"
        >
          <p>
            I&apos;m a passionate full-stack developer with expertise in building
            scalable web applications and mobile solutions. My journey in software
            development has led me to master the MERN stack, Firebase services, and
            Android development with Kotlin. I thrive on turning complex problems into
            simple, elegant solutions.
          </p>
          <p>
            With a strong foundation in modern web technologies and a keen eye for
            user experience, I create applications that are not only functional but
            also intuitive and performant. I&apos;m always eager to learn new
            technologies and contribute to innovative projects that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

