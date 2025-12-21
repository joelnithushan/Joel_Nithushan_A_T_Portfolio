import { Metadata } from "next";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact - Joel Nithushan",
  description:
    "Get in touch with Joel Nithushan for collaboration, job opportunities, or any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

