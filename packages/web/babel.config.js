const baseConfig = require('../../babel.config');

module.exports = {
  ...baseConfig,
  plugins: ['@babel/plugin-transform-modules-commonjs']
};
