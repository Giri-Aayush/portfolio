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
      className="group cursor-pointer shrink-0 w-[380px]"
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragDistRef = useRef(0);

  // Auto-scroll with requestAnimationFrame
  const scrollSpeed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += scrollSpeed;
        // Loop: when scrolled past halfway (the duplicated content), reset
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

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.pageX - track.offsetLeft);
    setScrollLeft(track.scrollLeft);
    dragDistRef.current = 0;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const track = trackRef.current;
      if (!track) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      dragDistRef.current = Math.abs(walk);
      track.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - track.offsetLeft);
    setScrollLeft(track.scrollLeft);
    dragDistRef.current = 0;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      const track = trackRef.current;
      if (!track) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      dragDistRef.current = Math.abs(walk);
      track.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Prevent link clicks after dragging
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
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto px-8 select-none scrollbar-hide"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClickCapture={handleClick}
        >
          {loopedVideos.map((video, i) => (
            <VideoCard key={`${video.href}-${i}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
