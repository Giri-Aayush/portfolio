import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pin the workspace root to this project. Without it, Turbopack detects the
  // lockfile in the home directory and infers the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
