const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/music-distribution' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true }
};
export default nextConfig;
