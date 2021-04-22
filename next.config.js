const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

const config = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  future: {
    webpack5: true,
  },
  i18n,
};

module.exports = withPlugins([[withBundleAnalyzer]], config);
