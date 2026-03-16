import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://emmanuel-a.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emmanuel Ayemere — Software Engineer & Systems Architect",
    template: "%s | Emmanuel Ayemere",
  },
  description:
    "Building software systems, teams, and tools for the AI era. 7+ years across healthcare, fintech, live streaming, and digital marketplaces.",
  keywords: [
    "Emmanuel Ayemere",
    "Emmanuel",
    "Emmanuel A",
    "Emmanuel Ehis Ayemere",
    "Emmanuel Ayemere Ehis",
    "Ehis Emmanuel Ayemere",
    "EhisEA",
    "Software Engineer",
    "Systems Architect",
    "AI",
    "Builder",
    "Telemedicine",
    "Fintech",
    "Technical Lead",
  ],
  authors: [{ name: "Emmanuel Ayemere", url: siteUrl }],
  creator: "Emmanuel Ayemere",
  openGraph: {
    title: "Emmanuel Ayemere — Software Engineer & Systems Architect",
    description:
      "Building software systems, teams, and tools for the AI era.",
    url: siteUrl,
    siteName: "Emmanuel Ayemere",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Ayemere — Software Engineer & Systems Architect",
    description:
      "Building software systems, teams, and tools for the AI era.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Ayemere",
              alternateName: [
                "Emmanuel Ehis Ayemere",
                "Emmanuel Ayemere Ehis",
                "Emmanuel A",
                "EhisEA",
              ],
              url: siteUrl,
              jobTitle: "Software Engineer & Systems Architect",
              description:
                "Building software systems, teams, and tools for the AI era.",
              sameAs: [
                "https://github.com/EhisEA",
                "https://linkedin.com/in/ayemere-emmanuel",
              ],
              knowsAbout: [
                "Software Engineering",
                "Systems Architecture",
                "AI-assisted Development",
                "Telemedicine",
                "Fintech",
                "Live Streaming",
              ],
            }),
          }}
        />
      </head>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
