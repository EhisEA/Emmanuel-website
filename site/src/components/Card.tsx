"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative rounded-xl border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] ${className}`}
    >
      {/* Corner accents */}
      <div className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t border-l border-accent/0 transition-all duration-300 group-hover:border-accent/30 rounded-tl-xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-accent/0 transition-all duration-300 group-hover:border-accent/30 rounded-br-xl" />
      {children}
    </motion.div>
  );
}
