import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { Videos } from "@/components/videos";
import { Contact } from "@/components/contact";
import { Motion } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aayush Giri",
  url: "https://aayush-giri.netlify.app",
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
    "Account Abstraction",
    "State Channels",
    "Model Context Protocol",
    "Developer Relations",
    "Blockchain Infrastructure",
    "Smart Contracts",
    "Solidity",
    "Cairo",
    "Noir",
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
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Videos />
        <Writing />
        <Contact />
      </main>
      <ThemeToggle />
      <Motion />
    </>
  );
}
