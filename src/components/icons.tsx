import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  width: 16,
  height: 16,
  "aria-hidden": true,
};

export const Icon = {
  gh: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.51 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.54 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.4 9.4 0 015 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.93.68 1.88v2.79c0 .27.18.58.69.48C19.14 20.5 22 16.7 22 12.19 22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  x: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  in: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  yt: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  ),
  mail: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  arrow: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  play: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  star: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="currentColor" {...p}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  resume: (p?: SVGProps<SVGSVGElement>) => (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  ),
};
