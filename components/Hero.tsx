"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Red Circle Background */}
              <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 blur-3xl scale-150"></div>
              <div className="absolute inset-0 bg-red-600 rounded-full opacity-30 blur-2xl scale-125"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-600/30">
                <Image
                  src="/images/about/about-profile.png"
                  alt="Joel Nithushan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              Hi, I&apos;m{" "}
              <span className="text-red-600">Joel Nithushan</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            >
              I&apos;m a{" "}
              <span className="text-red-600 relative">
                Software Developer Intern
                <span className="absolute ml-1 w-0.5 h-8 bg-white animate-pulse">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Aspiring Software Engineer and BSc (Hons) Software Engineering student with hands-on experience in real-time IoT systems, web development, and Android mobile apps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-transparent border-2 border-red-600 text-white rounded-lg hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 w-full sm:w-auto"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

