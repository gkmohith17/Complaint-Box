
const { withWebpack } = require('next-plugin-webpack');

module.exports = withWebpack({
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      // Add other fallbacks if necessary
    };
    return config;
  },
});

