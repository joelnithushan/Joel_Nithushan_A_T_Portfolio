import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Joel Nithushan",
  description:
    "Get in touch with Joel Nithushan for collaboration, job opportunities, or any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="glass-card rounded-2xl p-8 shadow-glass text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 glass-card rounded-xl shadow-glass glass-hover"
          >
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:joel@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              joel@example.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center p-6 glass-card rounded-xl shadow-glass glass-hover"
          >
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +1 (234) 567-890
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center p-6 glass-card rounded-xl shadow-glass glass-hover"
          >
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Available Worldwide</p>
          </motion.div>
        </div>
        <ContactForm />
      </motion.div>
    </div>
  );
}

