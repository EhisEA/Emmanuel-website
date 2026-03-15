import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Emmanuel Ayemere — Software Engineer & Systems Architect",
  description:
    "Building software systems, teams, and tools for the AI era. 7+ years across healthcare, fintech, live streaming, and digital marketplaces.",
  openGraph: {
    title: "Emmanuel Ayemere — Software Engineer & Systems Architect",
    description:
      "Building software systems, teams, and tools for the AI era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
