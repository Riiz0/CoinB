const webpack = require('webpack');

module.exports = function override(config) {
 const fallback = config.resolve.fallback || {};
 Object.assign(fallback, {
   "http": require.resolve("stream-http"),
   "https": require.resolve("https-browserify"),
 });
 config.resolve.fallback = fallback;

 return config;
};