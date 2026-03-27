import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Chronicle } from "@/components/chronicle";
import { Awards } from "@/components/awards";
import { Transmission } from "@/components/transmission";
import { Logs } from "@/components/logs";
import { Terminal } from "@/components/terminal";
import { Credentials } from "@/components/credentials";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aayush Giri",
  url: "https://aayushgiri.dev",
  jobTitle: "Senior Developer Relations Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Nethermind",
    url: "https://www.nethermind.io/",
  },
  sameAs: [
    "https://github.com/Giri-Aayush",
    "https://x.com/AayushStack",
    "https://www.linkedin.com/in/aayush-giri/",
  ],
  knowsAbout: [
    "Ethereum",
    "Starknet",
    "Aztec",
    "Zero Knowledge Proofs",
    "Developer Relations",
    "Blockchain Infrastructure",
    "Smart Contracts",
    "Rust",
    "TypeScript",
    "Go",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-24 pb-12">
        <Hero />
        <Stats />
        <Chronicle />
        <Awards />
        <Credentials />
        <Transmission />
        <Logs />
        <Terminal />
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}
