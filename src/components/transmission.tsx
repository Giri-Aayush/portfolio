import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    category: "Tutorial // Nethermind",
    title: "Build a Starknet MCP Server in 15 Minutes",
    description:
      "Connect Claude AI to Blockchain -building an MCP server for Starknet from scratch.",
    thumbnail: "https://i.ytimg.com/vi/hm0hBShN9WE/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=hm0hBShN9WE",
  },
  {
    category: "Workshop // Nethermind",
    title: "Run Your Own Starknet Node With Juno",
    description:
      "Step-by-step guide to spinning up and running a Starknet full node using Juno.",
    thumbnail: "https://i.ytimg.com/vi/gvdC2XIOibA/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=gvdC2XIOibA",
  },
  {
    category: "Guide // Nethermind",
    title: "Running an Aztec Node with Sedge",
    description:
      "How to deploy and operate an Aztec network node using the Sedge CLI tool.",
    thumbnail: "https://i.ytimg.com/vi/g1bYKIGfYVw/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=g1bYKIGfYVw",
  },
  {
    category: "Tutorial // Nethermind",
    title: "Create a Starknet Account in Go",
    description:
      "starknet.go tutorial -programmatically creating and deploying Starknet accounts in Go.",
    thumbnail: "https://i.ytimg.com/vi/9j2ikkA3IRE/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=9j2ikkA3IRE",
  },
];

// Duplicate for seamless loop
const loopedVideos = [...videos, ...videos];

function VideoCard({
  video,
}: {
  video: (typeof videos)[number];
}) {
  return (
    <Link
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer flex-shrink-0 w-[380px]"
    >
      <div className="aspect-video bg-surface-container-low mb-4 relative overflow-hidden border border-transparent group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(129,236,255,0.12)] transition-all duration-500">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-all duration-500 scale-100 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>
      <span className="font-label text-[10px] text-secondary tracking-widest uppercase mb-1 block">
        {video.category}
      </span>
      <h3 className="font-headline text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">
        {video.title}
      </h3>
      <p className="font-body text-sm text-on-surface-variant line-clamp-2">
        {video.description}
      </p>
    </Link>
  );
}

export function Transmission() {
  return (
    <section id="transmission" className="mb-28 overflow-hidden">
      <div className="px-8 mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          TRANSMISSION // VIDEO
        </h2>
        <div className="h-px grow bg-outline-variant/20" />
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">
          {loopedVideos.map((video, i) => (
            <VideoCard key={`${video.href}-${i}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
