const withPWA = require("next-pwa");
module.exports = withPWA({
  webpack: (config) => {
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.NEXTAUTH_SECRET,
  },
  reactStrictMode: false,
  images: {
    domains: [
      "mpf-public-data.s3.ap-south-1.amazonaws.com",
      "assets.myntassets.com",
      "images.unsplash.com",
    ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
