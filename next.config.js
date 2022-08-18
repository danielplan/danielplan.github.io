/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `
    @import "~@styles/abstract/_functions.scss";
    @import "~@styles/abstract/_variables.scss";
    @import "~@styles/abstract/_mixins.scss";
    `,
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
