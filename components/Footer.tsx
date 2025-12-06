"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/joelnithushan", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/joelnithushan",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:joel@example.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/joelnithushan", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 glass">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Joel Nithushan. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 glass rounded-lg hover:bg-white/5"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

