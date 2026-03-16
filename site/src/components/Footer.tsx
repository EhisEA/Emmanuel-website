import { Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div>
          <p className="text-sm text-muted">
            {new Date().getFullYear()} {siteContent.name}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={siteContent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href={siteContent.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Linkedin size={18} />
          </a>
          <Link
            href="/contact"
            className="text-muted transition-colors hover:text-foreground"
          >
            <MessageCircle size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
