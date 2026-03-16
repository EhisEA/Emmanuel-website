"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { Github, Linkedin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

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
            Contact
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-16 max-w-2xl text-lg text-muted">
            Have a project idea, want to collaborate, or just want to say hello?
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-foreground">
                Connect
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href={siteContent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Github size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted">@EhisEA</p>
                  </div>
                </a>

                <a
                  href={siteContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Linkedin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      LinkedIn
                    </p>
                    <p className="text-sm text-muted">ayemere-emmanuel</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-foreground">
                Send a Message
              </h2>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-accent/20 bg-accent/5 p-8 text-center"
                >
                  <p className="mb-2 text-lg font-medium text-foreground">
                    Message sent!
                  </p>
                  <p className="text-sm text-muted">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
