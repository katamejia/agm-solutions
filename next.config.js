const EslintPlugin = require('eslint-webpack-plugin');
const { Extension } = require('typescript');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: false,
    i18n,
};
    webpack: (config, env) => {
      if (env.dev) {
        config.plugins.push(new EslintPlugin({
        Extensions: ['js', 'jsx', 'ts', 'tsx'],
        files:['pages', 'src'],
        failOnError: false, 
        }))
      }
      return config;
    };

module.exports =nextConfig;

