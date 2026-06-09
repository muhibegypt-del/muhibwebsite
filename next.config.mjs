/**
 * basePath/assetPrefix are set from NEXT_PUBLIC_BASE_PATH so the same build
 * works on GitHub Pages (/muhibwebsite) and Vercel (root).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
