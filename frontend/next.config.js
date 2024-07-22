
const { withWebpack } = require('next-plugin-webpack');

module.exports = withWebpack({
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      // Add other fallbacks if necessary
    };
    return config;
  },
});
