import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Security & Headers ───────────────────────────────
  poweredByHeader: false,
  compress: true,

  // ─── Image Optimization ───────────────────────────────
  images: {
    // Serve modern formats: AVIF first, then WebP
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,

    // Responsive breakpoints for srcSet generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.higgs.ai",
      },
      {
        protocol: "https",
        hostname: "pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev",
      },
    ],
  },

  // ─── Experimental Performance ─────────────────────────
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
