"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "joelnithushan6@gmail.com",
    href: "mailto:joelnithushan6@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+94 76 942 3167",
    href: "tel:+94769423167",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaffna, Sri Lanka",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/joelnithushan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-nithushan-a-t",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass space-y-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>
      
      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="p-2 glass rounded-lg flex-shrink-0">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-sm sm:text-base text-foreground hover:text-primary transition-colors break-words"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base text-foreground">{contact.value}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="pt-6 border-t dark:border-white/10 border-black/10">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Connect With Me</h3>
        <div className="flex gap-3 sm:gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 glass rounded-xl hover:bg-white/5 transition-colors"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

