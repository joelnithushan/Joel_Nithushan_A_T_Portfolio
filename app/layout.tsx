import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joel Nithushan - Full-Stack Developer",
  description:
    "Portfolio of Joel Nithushan, a Full-Stack Developer specializing in MERN stack, Firebase, and Android Kotlin development.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Firebase",
    "Android Kotlin",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <BackgroundAnimation />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

