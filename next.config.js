//It's a package that installed because of error -> 'SyntaxError: Cannot use import statement outside a module' for weather icons

const withTM = require('next-transpile-modules')(['weather-icons-react']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['openweathermap.org', 'source.unsplash.com']
  }
});
