/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ih1.redbubble.net",
      },
    ],
  },
};

module.exports = nextConfig;
