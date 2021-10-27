'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/chips.production.min.js');
} else {
  module.exports = require('./esm/chips.development.js');
}
