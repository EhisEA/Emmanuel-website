import Section from "@/components/Section";
import Card from "@/components/Card";
import { siteContent } from "@/lib/content";
import { Metadata } from "next";
import { Zap, Lightbulb, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Experiments — Emmanuel Ayemere",
  description:
    "Teaching people across fields to use AI as an executable thinking and execution tool — not just a chatbot.",
};

export default function AIPage() {
  const { workshops, exploration } = siteContent.aiExperiments;

  return (
    <div className="pt-20">
      <Section>
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          AI Experiments
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          AI Beyond the Chat Interface
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          {siteContent.hero.aiVision}
        </p>
      </Section>

      <Section className="bg-surface">
        <div className="mb-2 flex items-center gap-2">
          <Zap size={20} className="text-accent" />
          <h2 className="text-2xl font-bold text-foreground">
            {workshops.title}
          </h2>
        </div>
        <p className="mb-6 max-w-2xl text-muted">{workshops.description}</p>
        <p className="mb-10 font-mono text-sm text-accent">
          {workshops.result}
        </p>

        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Users size={16} className="text-accent" />
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Who I&apos;ve Trained
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {workshops.participants.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
          What We Cover
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.topics.map((topic) => (
            <Card key={topic} className="text-center">
              <p className="text-sm font-medium text-foreground">{topic}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-2 flex items-center gap-2">
          <Lightbulb size={20} className="text-accent" />
          <h2 className="text-2xl font-bold text-foreground">
            {exploration.title}
          </h2>
        </div>
        <p className="mb-8 max-w-2xl text-muted">{exploration.description}</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              Areas of Focus
            </h3>
            <ul className="space-y-3">
              {exploration.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-muted"
                >
                  <ArrowRight size={14} className="text-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-background">
            <h3 className="mb-2 font-mono text-sm font-semibold text-accent">
              Example Idea
            </h3>
            <p className="mb-4 text-sm text-muted">
              {exploration.example.description}
            </p>
            <div className="flex flex-col gap-2">
              {exploration.example.outputs.map((output, i) => (
                <div
                  key={output}
                  className="flex items-center gap-3 rounded-lg bg-surface p-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-accent/10 font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{output}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
