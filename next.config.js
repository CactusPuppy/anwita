const withImages = require("next-images");

module.exports = {
  ...withImages(),
  webpack5: true,
  images: {
    domains: ["dl.airtable.com"],
  },
};
