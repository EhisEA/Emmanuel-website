import { Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground">EA</span>
          <span className="text-accent">.</span>
          <span className="font-mono text-xs text-muted/50">
            {new Date().getFullYear()} {siteContent.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={siteContent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted transition-all hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <Github size={16} />
          </a>
          <a
            href={siteContent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted transition-all hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <Linkedin size={16} />
          </a>
          <Link
            href="/contact"
            className="rounded-md p-2 text-muted transition-all hover:text-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
