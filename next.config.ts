import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  // basePath: '/chrispo_web_Portfolio', // Replace with your repository name
  trailingSlash: true, // Ensures paths end with "/"
};

export default nextConfig;
