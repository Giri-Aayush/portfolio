import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aayush Giri // Senior DevRel Engineer",
  description:
    "Senior Developer Relations Engineer at Nethermind. 15+ conference talks, 3 ETHGlobal wins, specializing in ZK proofs, rollups, and Ethereum infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        spaceGrotesk.variable,
        inter.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
