/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chatgpt.com',
      },
      {
        protocol: 'https',
        hostname: 'browser-use.com',
      },
      {
        protocol: 'https',
        hostname: 'www.perplexity.ai',
      },
      {
        protocol: 'https',
        hostname: 'openclaw.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
