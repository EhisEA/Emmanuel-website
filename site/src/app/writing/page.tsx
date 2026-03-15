import Section from "@/components/Section";
import Card from "@/components/Card";
import { siteContent } from "@/lib/content";
import { Metadata } from "next";
import { PenLine, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing — Emmanuel Ayemere",
  description: "Notes on building systems, AI, and the future of software development.",
};

const articles = [
  {
    title: "AI Will Change How Software Is Built",
    date: "2025-03-01",
    readingTime: "5 min read",
    excerpt:
      "The shift from writing code to designing systems in collaboration with AI is already happening. Here's what I've learned from building with AI tools every day.",
  },
  {
    title: "Why Engineers Should Think Like Architects",
    date: "2025-02-15",
    readingTime: "4 min read",
    excerpt:
      "Great engineers don't just write code — they design systems. The ability to reason about architecture is what separates builders from coders.",
  },
  {
    title: "AI Beyond the Chat Interface",
    date: "2025-01-20",
    readingTime: "6 min read",
    excerpt:
      "Most people use AI as a chatbot. But the real power lies in using AI as an executable reasoning tool that helps you design and build systems faster.",
  },
  {
    title: "From Idea to System",
    date: "2024-12-10",
    readingTime: "7 min read",
    excerpt:
      "A framework for going from a rough idea to a working system — lessons from 7+ years of building across industries.",
  },
];

export default function WritingPage() {
  return (
    <div className="pt-20">
      <Section>
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Notes
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          Writing
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted">
          {siteContent.writing.intro}
        </p>

        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <Card key={article.title} className="group cursor-pointer p-8">
              <div className="mb-3 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <PenLine size={12} />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readingTime}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {article.title}
              </h2>
              <p className="text-sm text-muted">{article.excerpt}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted">
            More articles coming soon. These posts will be written in MDX and rendered dynamically.
          </p>
        </div>
      </Section>
    </div>
  );
}
