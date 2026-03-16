import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Timeline from "@/components/Timeline";
import BuildWithMe from "@/components/BuildWithMe";
import AnimatedCounter from "@/components/AnimatedCounter";
import { siteContent } from "@/lib/content";
import { ArrowRight, Brain, Layers, Cpu, TrendingUp, Zap, Radio, Truck, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Metrics Strip */}
      <Section className="border-y border-border/50">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteContent.metrics.map((metric) => (
            <AnimatedCounter key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </Section>

      {/* How I Think */}
      <Section id="how-i-think">
        <p className="mb-4 font-mono text-xs tracking-widest text-accent">
          &gt; philosophy
        </p>
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
          How I Think
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-muted">
              {siteContent.howIThink.premise}
            </p>
            <p className="mb-6 text-muted">
              {siteContent.howIThink.observation}
            </p>
            <p className="mb-4 text-sm font-medium text-foreground">
              But the ability to:
            </p>
            <ul className="mb-6 space-y-2">
              {siteContent.howIThink.constants.map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted">
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">remains constant.</p>
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;{siteContent.howIThink.quote}&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-muted">{siteContent.howIThink.future}</p>
            <p className="mt-4 font-medium text-accent">
              {siteContent.howIThink.closing}
            </p>
          </div>
        </div>
      </Section>

      {/* Systems Built */}
      <Section id="systems" className="bg-surface">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-accent">
              &gt; case_studies
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Systems I&apos;ve Built
            </h2>
          </div>
          <Link
            href="/systems"
            className="hidden items-center gap-1 text-sm text-accent transition-colors hover:text-accent-light md:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.systems.slice(0, 6).map((system, i) => {
            const icons = [Layers, TrendingUp, Cpu, Brain, Truck, Radio, Zap, Users];
            const Icon = icons[i % icons.length];
            return (
              <Card key={system.title}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {system.title}
                      </h3>
                      <p className="text-xs text-muted">{system.company}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                      system.status === "live"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : system.status === "coming-soon"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-zinc-500/10 text-zinc-500"
                    }`}
                  >
                    {system.status === "coming-soon" ? "Coming Soon" : system.status}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted">{system.problem}</p>
                {system.impact.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {system.impact.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {system.url && system.status === "live" && (
                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLink size={12} />
                    {system.url.replace("https://", "")}
                  </a>
                )}
              </Card>
            );
          })}
        </div>
        <Link
          href="/systems"
          className="mt-8 flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-light md:hidden"
        >
          View all systems <ArrowRight size={14} />
        </Link>
      </Section>

      {/* AI Experiments */}
      <Section id="ai-experiments">
        <p className="mb-4 font-mono text-xs tracking-widest text-accent">
          &gt; exploration
        </p>
        <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
          AI Experiments
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {siteContent.aiExperiments.workshops.title}
            </h3>
            <p className="mb-4 text-sm text-muted">
              {siteContent.aiExperiments.workshops.description}
            </p>
            <p className="mb-4 font-mono text-sm text-accent">
              {siteContent.aiExperiments.workshops.result}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {siteContent.aiExperiments.workshops.participants.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {p}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {siteContent.aiExperiments.exploration.title}
            </h3>
            <p className="mb-4 text-sm text-muted">
              {siteContent.aiExperiments.exploration.description}
            </p>
            <ul className="mb-6 space-y-2">
              {siteContent.aiExperiments.exploration.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="rounded-lg bg-background p-4">
              <p className="mb-2 text-xs font-medium text-foreground">
                Example: {siteContent.aiExperiments.exploration.example.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.aiExperiments.exploration.example.outputs.map(
                  (output) => (
                    <span
                      key={output}
                      className="rounded bg-accent/10 px-2 py-1 font-mono text-xs text-accent"
                    >
                      {output}
                    </span>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-6 text-right">
          <Link
            href="/ai"
            className="inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-light"
          >
            Explore AI work <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" className="bg-surface">
        <p className="mb-4 font-mono text-xs tracking-widest text-accent">
          &gt; journey
        </p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Timeline
        </h2>
        <div className="mx-auto max-w-2xl">
          <Timeline items={siteContent.timeline} />
        </div>
      </Section>

      {/* Mentoring */}
      <Section id="mentoring">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-xs tracking-widest text-accent">
            &gt; leadership
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            {siteContent.mentoring.headline}
          </h2>
          <p className="mb-4 text-lg text-muted">
            {siteContent.mentoring.description}
          </p>
          <p className="text-muted">
            {siteContent.mentoring.details}
          </p>
        </div>
      </Section>

      {/* Build With Me */}
      <Section id="build">
        <div className="mx-auto max-w-3xl">
          <BuildWithMe />
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-surface text-center">
        <p className="mb-4 font-mono text-xs tracking-widest text-accent">
          &gt; connect
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Let&apos;s Build Together
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-muted">
          {siteContent.thesis.vision}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </Section>
    </>
  );
}
