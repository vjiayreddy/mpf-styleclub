const withPWA = require("next-pwa");
module.exports = withPWA({
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
