import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* Silence local workspace-root detection warning */
  outputFileTracingRoot: path.join(__dirname),

  images: {
    formats: ["image/avif", "image/webp"],
  },

  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
