/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  images: { unoptimized: true }, // Fixes image issues in static export
  trailingSlash: true, // Optional (ensures proper file generation)
};

module.exports = nextConfig;
