import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building systems, AI-assisted development, and the future of software engineering.",
  alternates: { canonical: "/writing" },
};

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
