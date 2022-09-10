/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { dirs: ['src'] },
  pageExtensions: ['page.tsx', 'page.jsx'],
};

export default nextConfig;
