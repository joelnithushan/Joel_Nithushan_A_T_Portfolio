"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
  delay?: number;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  content,
  href,
  delay = 0,
}: ContactInfoCardProps) {
  const contentElement = href ? (
    <a
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {content}
    </a>
  ) : (
    <p className="text-muted-foreground">{content}</p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-6 glass-card rounded-xl shadow-glass glass-hover"
    >
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      {contentElement}
    </motion.div>
  );
}

