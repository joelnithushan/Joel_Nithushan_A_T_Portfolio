"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface ProjectImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

export default function ProjectImageModal({
  isOpen,
  onClose,
  projectTitle,
  images,
}: ProjectImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, isOpen, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] max-w-[95vw] max-h-[95vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white line-clamp-2 pr-2">
                {projectTitle}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 glass rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.button>
            </div>

            {/* Image Container */}
            <div className="flex-1 relative glass-card rounded-2xl overflow-hidden bg-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center p-4"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`${projectTitle} - Image ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                    priority
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors z-10 bg-white/80 dark:bg-white/10 text-black dark:text-white shadow-lg"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 glass rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors z-10 bg-white/80 dark:bg-white/10 text-black dark:text-white shadow-lg"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 max-w-full overflow-x-auto px-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all flex-shrink-0 ${
                        index === currentIndex
                          ? "w-6 sm:w-8 bg-red-600"
                          : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="mt-2 sm:mt-4 text-center text-white/80 text-xs sm:text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

