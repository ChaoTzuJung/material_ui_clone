'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/chips.production.min.js');
} else {
  module.exports = require('./cjs/chips.development.js');
}
