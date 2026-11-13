import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the project root so a stray lockfile in a parent folder isn't picked up.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
