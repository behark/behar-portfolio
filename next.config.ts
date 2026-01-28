import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix multiple lockfiles warning
  turbopack: {
    root: __dirname,
  },
  // Optimize for production
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
