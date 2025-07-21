// filepath: c:\Users\jkzy0\Documents\_Internships_Work\my_portfolio\next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: false
  },
  // basePath: '/my_portfolio',
  // assetPrefix: '/my_portfolio/',
};

export default nextConfig;