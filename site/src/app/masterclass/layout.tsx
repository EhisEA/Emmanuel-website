import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Masterclass — Apply for the Next Session",
  description:
    "A hands-on masterclass where you learn to use AI as an executable thinking and execution tool. For engineers, designers, PMs, and beyond.",
  alternates: { canonical: "/masterclass" },
};

export default function MasterclassLayout({ children }: { children: React.ReactNode }) {
  return children;
}
