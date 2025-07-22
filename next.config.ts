import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/my_portfolio' : '',
  assetPrefix: isProd ? '/my_portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
