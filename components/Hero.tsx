"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 flex justify-center lg:justify-center lg:pl-8"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass w-full max-w-md mx-auto lg:mx-0">
              {/* Profile Image */}
              <div className="relative w-full aspect-square max-w-xs mx-auto mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/about/about-profile.png"
                  alt="Joel Nithushan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name, Title, and Location */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-white">
                  Joel Nithushan A.T
                </h2>
                <p className="text-lg sm:text-xl text-primary font-semibold">
                  Aspiring Software Engineer
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm sm:text-base">Jaffna, Sri Lanka</span>
                </div>
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
              <span className="text-red-600 dark:text-white">Joel Nithushan</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            >
              Seeking{" "}
              <span className="text-red-600 relative">
                Internship Opportunities
                <span className="absolute ml-1 w-0.5 h-8 bg-white animate-pulse">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Aspiring Software Engineer and BSc (Hons) Software Engineering student with hands-on experience in real-time IoT systems, web development, Android mobile apps, and workflow automation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-red-600 border-2 border-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="/joel_intern_cv.pdf"
                download="Joel_Nithushan_CV.pdf"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-red-600 border-2 border-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 w-full sm:w-auto"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
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

