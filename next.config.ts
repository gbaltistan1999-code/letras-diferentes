import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the project root so a stray lockfile in a parent folder isn't picked up.
  turbopack: { root: path.resolve(__dirname) },
  async redirects() {
    return [
      // Was briefly a blog post; now a tool page with the generator.
      { source: "/blog/nome-personalizado", destination: "/nome-personalizado", permanent: true },
    ];
  },
};

export default nextConfig;
