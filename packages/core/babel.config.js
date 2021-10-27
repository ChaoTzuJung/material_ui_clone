const baseConfig = require('../../babel.config');

module.exports = {
  ...baseConfig,
  compact: false,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
};
