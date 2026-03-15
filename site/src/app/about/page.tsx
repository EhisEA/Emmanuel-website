import Section from "@/components/Section";
import { siteContent } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Emmanuel Ayemere",
  description:
    "Software engineer and systems architect building complex systems from scratch for 7+ years.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section>
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          About
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          {siteContent.name}
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          {siteContent.title}
        </p>
      </Section>

      {/* Story */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Story</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{siteContent.about.intro}</p>
            <p>{siteContent.about.journey}</p>
            <p className="font-medium text-foreground">
              {siteContent.about.commitment}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              Domains
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteContent.about.domains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-muted">{siteContent.about.mentoring}</p>
        </div>
      </Section>

      {/* Engineering Philosophy */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Engineering Philosophy
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{siteContent.howIThink.premise}</p>
            <p>{siteContent.howIThink.observation}</p>
            <ul className="my-6 space-y-2 pl-4">
              {siteContent.howIThink.constants.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-accent pl-6 text-lg font-medium italic text-foreground">
              &ldquo;{siteContent.howIThink.quote}&rdquo;
            </blockquote>
            <p>{siteContent.howIThink.future}</p>
          </div>
        </div>
      </Section>

      {/* Interests */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {siteContent.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Personal Thesis */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
            Personal Thesis
          </p>
          <p className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {siteContent.thesis.statement}
          </p>
          <p className="mb-6 text-2xl font-bold text-accent md:text-3xl">
            {siteContent.thesis.vision}
          </p>
          <p className="text-lg text-muted">{siteContent.thesis.mission}</p>
        </div>
      </Section>
    </div>
  );
}
