/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/:path*`,
      },
      {
        source: '/user/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/user/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
