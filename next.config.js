const withImages = require("next-images");

module.exports = withImages({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
  images: {
    domains: ["localhost", "odd-lime-hare-fez.cyclic.app"],
  },
});
