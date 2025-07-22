import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

export const getBasePath = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/my_portfolio' : '';
};

export const getImagePath = (imagePath: string) => {
  return `${getBasePath()}${imagePath}`;
};

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
