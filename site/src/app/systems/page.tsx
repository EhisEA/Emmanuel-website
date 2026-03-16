import Section from "@/components/Section";
import Card from "@/components/Card";
import { siteContent } from "@/lib/content";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Systems",
  description: "Case studies of systems built across healthcare, fintech, live streaming, and digital marketplaces.",
  alternates: { canonical: "/systems" },
};

const statusStyles = {
  live: "bg-emerald-500/10 text-emerald-400",
  "coming-soon": "bg-amber-500/10 text-amber-400",
  discontinued: "bg-zinc-500/10 text-zinc-500",
};

const statusLabels = {
  live: "Live",
  "coming-soon": "Coming Soon",
  discontinued: "Discontinued",
};

export default function SystemsPage() {
  return (
    <div className="pt-20">
      <Section>
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Case Studies
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          Systems I&apos;ve Built
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          {siteContent.about.commitment}
        </p>

        <div className="flex flex-col gap-12">
          {siteContent.systems.map((system) => (
            <Card key={system.title} className="p-8 md:p-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="mb-1 font-mono text-xs text-accent uppercase">
                    {system.company}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {system.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider ${statusStyles[system.status]}`}
                  >
                    {statusLabels[system.status]}
                  </span>
                  {system.url && system.status === "live" && (
                    <a
                      href={system.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      <ExternalLink size={12} />
                      {system.url.replace("https://", "").replace("www.", "")}
                    </a>
                  )}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    Problem
                  </h3>
                  <p className="text-sm text-muted">{system.problem}</p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    What Was Built
                  </h3>
                  <ul className="space-y-1">
                    {system.built.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    Impact
                  </h3>
                  {system.impact.length > 0 ? (
                    <ul className="space-y-1">
                      {system.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted/50 italic">
                      Platform launched and operational
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
