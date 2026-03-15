import Section from "@/components/Section";
import Card from "@/components/Card";
import { siteContent } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems — Emmanuel Ayemere",
  description: "Case studies of systems built across healthcare, fintech, live streaming, and digital marketplaces.",
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
              <div className="mb-1 font-mono text-xs text-accent uppercase">
                {system.company}
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                {system.title}
              </h2>

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
