"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

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

const loopedVideos = [...videos, ...videos];

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  return (
    <Link
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer shrink-0 w-[300px] md:w-[380px]"
      draggable={false}
    >
      <div className="aspect-video bg-surface-container-low mb-4 relative overflow-hidden border border-transparent group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(129,236,255,0.12)] transition-all duration-500">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          draggable={false}
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistRef = useRef(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-scroll on all devices
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += 0.5;
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Desktop drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    startXRef.current = e.pageX - track.offsetLeft;
    scrollLeftRef.current = track.scrollLeft;
    dragDistRef.current = 0;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const track = trackRef.current;
      if (!track) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      dragDistRef.current = Math.abs(walk);
      track.scrollLeft = scrollLeftRef.current - walk;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (dragDistRef.current > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  return (
    <section id="transmission" className="mb-28 overflow-hidden">
      <div className="px-8 mb-12 flex items-center gap-4">
        <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
          TRANSMISSION // VIDEO
        </h2>
        <div className="h-px grow bg-outline-variant/20" />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 overflow-x-auto px-8 select-none scrollbar-hide"
          style={!isMobile ? { cursor: isDragging ? "grabbing" : "grab" } : undefined}
          onMouseDown={!isMobile ? handleMouseDown : undefined}
          onMouseMove={!isMobile ? handleMouseMove : undefined}
          onMouseUp={!isMobile ? handleMouseUp : undefined}
          onMouseLeave={!isMobile ? handleMouseUp : undefined}
          onClickCapture={!isMobile ? handleClick : undefined}
        >
          {loopedVideos.map((video, i) => (
            <VideoCard key={`${video.href}-${i}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
