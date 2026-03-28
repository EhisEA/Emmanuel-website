"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BuildWithMe() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-8 md:p-12">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles size={20} className="text-accent" />
        <h3 className="text-lg font-semibold text-foreground">
          Build Something With Me
        </h3>
      </div>
      <p className="mb-6 text-muted">
        Describe a system idea and let&apos;s explore it together.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSubmitted(false);
          }}
          placeholder="e.g. A real-time analytics dashboard for IoT devices..."
          className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Explore
        </button>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4"
        >
          <p className="font-mono text-sm text-accent">
            {"> "}System idea received: &quot;{input}&quot;
          </p>
          <p className="mt-2 text-sm text-muted">
            AI-assisted exploration coming soon. For now,{" "}
            <a
              href="/contact"
              className="text-accent underline underline-offset-2 hover:text-accent/80"
            >
              reach out
            </a>{" "}
            and let&apos;s discuss this together.
          </p>
        </motion.div>
      )}
    </div>
  );
}
