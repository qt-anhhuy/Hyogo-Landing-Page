/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add allowed image domains if needed
    ],
  },
  // Uncomment if you need to support older browsers
  // transpilePackages: [],
  // Enable if you need strict mode
  reactStrictMode: true,
}

module.exports = nextConfig 