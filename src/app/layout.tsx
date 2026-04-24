import type { Metadata } from "next";
import { Inter_Tight, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://aayushgiri.dev";
const title = "Aayush Giri // Senior DevRel Engineer";
const description =
  "Senior Developer Relations Engineer at Nethermind. 5+ years shipping SDKs, developer tooling, and protocol integrations across EVM and non-EVM. 15+ talks, 3 ETHGlobal wins.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  keywords: [
    "Aayush Giri",
    "Developer Relations",
    "DevRel",
    "Web3",
    "Ethereum",
    "Starknet",
    "Aztec",
    "Zero Knowledge",
    "ZK Proofs",
    "Blockchain",
    "Nethermind",
    "Smart Contracts",
    "Solidity",
    "Rust",
    "SDK",
    "Developer Tooling",
    "ETHGlobal",
  ],
  authors: [{ name: "Aayush Giri", url: siteUrl }],
  creator: "Aayush Giri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: "Aayush Giri",
    images: [
      {
        url: "/profile.png",
        width: 1024,
        height: 1024,
        alt: "Aayush Giri - Senior DevRel Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AayushStack",
    images: ["/profile.png"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        interTight.variable,
        inter.variable,
        jetbrainsMono.variable
      )}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
