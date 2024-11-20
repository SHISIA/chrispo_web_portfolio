// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export', // Enable static export
//   // basePath: '/chrispo_web_Portfolio', // Replace with your repository name
//   trailingSlash: true, // Ensures paths end with "/"
// };

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
    basePath: '/chrispo_web_Portfolio', // Replace with your repository name
  // assetPrefix: isProd ? '/chrispo_web_Portfolio' : '', // Use the prefix only in production
  trailingSlash: true,
};

export default nextConfig;

