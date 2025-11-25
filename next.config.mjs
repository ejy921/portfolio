/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Required for static export
    },
    // Only use basePath in production (for GitHub Pages deployment)
    ...(process.env.NODE_ENV === 'production' && {
      basePath: '/portfolio',
      assetPrefix: '/portfolio/',
    }),
  };

export default nextConfig;
