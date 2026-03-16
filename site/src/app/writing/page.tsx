"use client";

import Card from "@/components/Card";
import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

const topics = siteContent.writing.topics;

export default function WritingPage() {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
            Notes on Building
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Writing
          </h1>
          <p className="mb-16 max-w-2xl text-lg text-muted">
            {siteContent.writing.intro}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <PenLine size={18} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {topic}
                    </h2>
                    <p className="mt-1 text-xs text-muted">Coming soon</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 rounded-xl border border-border bg-surface p-10 text-center"
          >
            <p className="mb-2 text-lg font-semibold text-foreground">
              Articles are on the way.
            </p>
            <p className="mx-auto max-w-md text-sm text-muted">
              I&apos;m writing about systems thinking, AI-assisted development, and lessons from 7+ years of building. Posts will appear here as they&apos;re published.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
