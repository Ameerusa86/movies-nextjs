/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;

