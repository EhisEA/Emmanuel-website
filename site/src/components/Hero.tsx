"use client";

import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero, name, title } = siteContent;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.04]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          {title}
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          {hero.heading}
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-muted md:text-xl">
          {hero.description}
        </p>
        <p className="mb-8 text-lg font-medium text-foreground/80">
          {hero.philosophy[1]}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={siteContent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            <Github size={18} />
            View GitHub
          </a>
          <a
            href="#how-i-think"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            Explore My Work
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
