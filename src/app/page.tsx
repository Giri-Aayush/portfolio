import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Chronicle } from "@/components/chronicle";
import { Transmission } from "@/components/transmission";
import { Logs } from "@/components/logs";
import { Terminal } from "@/components/terminal";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <Hero />
        <Stats />
        <Chronicle />
        <Transmission />
        <Logs />
        <Terminal />
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}
