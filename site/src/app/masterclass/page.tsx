"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  CheckCircle,
  Sparkles,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
  Terminal,
} from "lucide-react";

const experienceLevels = [
  "Never used AI",
  "I've tried ChatGPT a few times",
  "I use AI regularly but want to go deeper",
  "I use AI daily and want to push boundaries",
];

function TypingText({ text, className = "" }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse text-accent">|</span>
      )}
    </span>
  );
}

export default function MasterclassPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    goal: "",
    whyAdmit: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/masterclass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  };

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const canProceed = () => {
    switch (step) {
      case 0: return true; // intro
      case 1: return form.name.trim() !== "" && form.email.trim() !== "";
      case 2: return form.role.trim() !== "";
      case 3: return form.experience !== "";
      case 4: return form.goal.trim() !== "";
      case 5: return true; // optional step, always can proceed
      default: return false;
    }
  };

  const totalSteps = 6;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.06]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5">
              <Sparkles size={14} className="text-accent" />
              <span className="font-mono text-xs text-accent">Applications Open</span>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              AI Beyond the
              <br />
              <span className="text-accent">Chat Interface</span>
            </h1>

            {/* The Why */}
            <div className="mb-8 space-y-3 text-muted">
              <p>
                Everyone knows AI exists. Not everyone knows how to make it
                actually work for <span className="text-foreground font-medium">their field</span>,{" "}
                <span className="text-foreground font-medium">their problems</span>,{" "}
                <span className="text-foreground font-medium">their workflow</span>.
              </p>
              <p>
                The gap isn&apos;t awareness — it&apos;s <span className="text-accent font-semibold">execution</span>.
              </p>
              <p>
                This isn&apos;t a class where you sit and listen. You&apos;ll work through
                real case study simulations, solve actual problems live, and walk out
                ready to execute — not just informed, but <span className="text-foreground font-medium">already doing it</span>.
              </p>
              <p>
                The goal is not to gather knowledge. It&apos;s to{" "}
                <span className="text-accent font-semibold">visualize and plunge immediately into execution</span>.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-accent" />
                <span>Hands-on. Practical. Immediate results.</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={16} className="text-accent" />
                <span>Engineers, Designers, PMs, and beyond</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/emmanuel-v6.jpg"
                alt="Emmanuel Ayemere"
                width={400}
                height={500}
                className="h-auto w-full object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-semibold text-foreground">Emmanuel Ayemere</p>
                <p className="text-sm text-muted">
                  Software Engineer &middot; Systems Architect
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What you walk away with */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            What You&apos;ll Walk Away With
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Work through real case study simulations — not slides, not theory",
              "Leave with AI integrated into your actual workflow, not just your awareness",
              "Build execution patterns you can repeat on Monday morning",
              "Think with AI, solve with AI, ship with AI — in one session",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-5"
              >
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <p className="text-sm text-muted">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection note */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2">
            <Terminal size={14} className="text-accent" />
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">This is not a webinar.</span>{" "}
              Spots are limited. Applications are reviewed to ensure every participant comes ready to work.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-step Application */}
      <section className="px-6 pb-24 pt-4">
        <div className="mx-auto max-w-xl">
          {/* Terminal-style header */}
          <div className="mb-0 rounded-t-xl border border-b-0 border-border bg-surface px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted">
                  masterclass_application.sh
                </span>
              </div>
              {step > 0 && step < totalSteps && status !== "sent" && (
                <span className="font-mono text-xs text-muted">
                  step {step}/{totalSteps - 1}
                </span>
              )}
            </div>
          </div>

          {/* Progress bar */}
          {status !== "sent" && (
            <div className="h-0.5 bg-border">
              <motion.div
                className="h-full bg-accent"
                animate={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Form body */}
          <div className="rounded-b-xl border border-t-0 border-border bg-background p-8 md:p-10">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <CheckCircle size={48} className="mx-auto mb-5 text-accent" />
                  <p className="mb-2 font-mono text-sm text-accent">
                    &gt; application.status = &quot;submitted&quot;
                  </p>
                  <p className="mb-2 text-xl font-semibold text-foreground">
                    You&apos;re in the pipeline.
                  </p>
                  <p className="mx-auto max-w-sm text-sm text-muted">
                    I&apos;ll review your application and get back to you with
                    session details. Look out for an email soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Step 0: Intro */}
                  {step === 0 && (
                    <div className="space-y-4">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text="> Initializing application sequence..." />
                      </p>
                      <div className="space-y-3 text-sm text-muted">
                        <p>
                          You&apos;re about to apply for{" "}
                          <span className="font-medium text-foreground">
                            AI Beyond the Chat Interface
                          </span>{" "}
                          — a hands-on masterclass that transforms how you work with AI.
                        </p>
                        <p>
                          I review every application personally. This helps me understand
                          who&apos;s in the room so I can make the session as impactful as
                          possible for everyone.
                        </p>
                        <p className="text-foreground font-medium">
                          It takes about 60 seconds.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Name + Email */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text="> Let's start with the basics." />
                      </p>
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          autoFocus
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Role */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text={`> Nice to meet you, ${form.name.split(" ")[0]}. What do you do?`} />
                      </p>
                      <div>
                        <label htmlFor="role" className="mb-1 block text-sm font-medium text-foreground">
                          Your Role or Field
                        </label>
                        <input
                          type="text"
                          id="role"
                          autoFocus
                          value={form.role}
                          onChange={(e) => update("role", e.target.value)}
                          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                          placeholder="e.g. Product Designer, Software Engineer, Marketing Lead..."
                        />
                      </div>
                      <p className="text-xs text-muted">
                        This isn&apos;t just for engineers. If you work with ideas, decisions, or output — this is for you.
                      </p>
                    </div>
                  )}

                  {/* Step 3: AI Experience */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text="> Where are you on the AI spectrum?" />
                      </p>
                      <div className="flex flex-col gap-2">
                        {experienceLevels.map((level) => (
                          <label
                            key={level}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3.5 text-sm transition-all ${
                              form.experience === level
                                ? "border-accent bg-accent/5 text-foreground"
                                : "border-border text-muted hover:border-border hover:bg-surface"
                            }`}
                          >
                            <input
                              type="radio"
                              name="experience"
                              value={level}
                              checked={form.experience === level}
                              onChange={(e) => update("experience", e.target.value)}
                              className="sr-only"
                            />
                            <div
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                form.experience === level
                                  ? "border-accent bg-accent"
                                  : "border-border"
                              }`}
                            >
                              {form.experience === level && (
                                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </div>
                            {level}
                          </label>
                        ))}
                      </div>
                      <p className="text-xs text-muted">
                        Every level is welcome. The session meets you where you are.
                      </p>
                    </div>
                  )}

                  {/* Step 4: Goal */}
                  {step === 4 && (
                    <div className="space-y-5">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text="> What are you hoping to gain?" />
                      </p>
                      <div>
                        <label htmlFor="goal" className="mb-1 block text-sm font-medium text-foreground">
                          Your Goal
                        </label>
                        <textarea
                          id="goal"
                          autoFocus
                          rows={4}
                          value={form.goal}
                          onChange={(e) => update("goal", e.target.value)}
                          className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                          placeholder="What would make this session worth your Sunday?"
                        />
                      </div>
                      <p className="text-xs text-muted">
                        Be specific. This helps me tailor the session to the room.
                      </p>
                    </div>
                  )}

                  {/* Step 5: Why should we admit you (optional) */}
                  {step === 5 && (
                    <div className="space-y-5">
                      <p className="font-mono text-sm text-accent">
                        <TypingText text="> One more thing — optional but encouraged." />
                      </p>
                      <div>
                        <label htmlFor="whyAdmit" className="mb-1 block text-sm font-medium text-foreground">
                          Why should we admit you to our next session?
                        </label>
                        <textarea
                          id="whyAdmit"
                          autoFocus
                          rows={4}
                          value={form.whyAdmit}
                          onChange={(e) => update("whyAdmit", e.target.value)}
                          className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                          placeholder="What makes you a good fit for this session? What will you do with what you learn?"
                        />
                      </div>
                      <p className="text-xs text-muted">
                        This is optional — but a strong answer helps your application stand out.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {status !== "sent" && (
              <div className="mt-8 flex items-center justify-between">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps - 1 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {step === 0 ? "Begin" : "Continue"}
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || status === "sending"}
                    className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-400">{errorMsg}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
