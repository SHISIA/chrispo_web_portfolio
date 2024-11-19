import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // Enable static export
  basePath: isProd ? "/chrispo_web_Portfolio" : "", // Use basePath only in production
  trailingSlash: true, // Ensures paths end with "/"
  assetPrefix: isProd ? "/chrispo_web_Portfolio/" : "", // Prefix for assets in production
};

export default nextConfig;

