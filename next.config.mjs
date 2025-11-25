/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true, 
    },
    assetPrefix: isProd ? '/portfolio/' : '',
    basePath: isProd ? '/portfolio' : '',
    // Only use basePath in production (for GitHub Pages deployment)
    ...(process.env.NODE_ENV === 'production' && {
      basePath: '/portfolio',
      assetPrefix: '/portfolio/',
    }),
  };

export default nextConfig;
