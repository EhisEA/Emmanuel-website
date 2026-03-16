"use client";

import { motion } from "framer-motion";
import { Github, ChevronDown, Terminal } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero, name, title } = siteContent;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Horizontal scan line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        {/* Terminal-style tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <Terminal size={12} className="text-accent" />
          <span className="font-mono text-xs text-muted">
            {title}
          </span>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          {hero.heading.split("Software").map((part, i) =>
            i === 0 ? (
              <span key={i}>{part}</span>
            ) : (
              <span key={i}>
                <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  Software
                </span>
                {part}
              </span>
            )
          )}
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
            className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <Github size={18} />
            View GitHub
          </a>
          <a
            href="#how-i-think"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted transition-all hover:border-accent/50 hover:text-foreground hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <span className="font-mono text-accent">&gt;</span>
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
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted/50 uppercase tracking-widest">scroll</span>
          <ChevronDown size={20} className="text-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
