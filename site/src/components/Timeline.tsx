"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6 pl-8"
          >
            {/* Dot */}
            <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background" />

            <div>
              <p className="mb-1 font-mono text-sm font-semibold text-accent">
                {item.year}
              </p>
              <p className="text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
