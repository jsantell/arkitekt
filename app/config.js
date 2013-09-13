var _ = require('underscore');

var config = {
  COMMON: {},
  DEVELOPMENT: {
    apiURL: 'http://localhost:9999/',
    root: '/arkitekt/public/',
    mockDelay: 2000
  },
  PRODUCTION: {
    apiURL: 'http://my-app.io',
    root: '/'
  }
};

var merged = _.extend(config.COMMON, config[(ENV || 'development').toUpperCase()]);
module.exports = Object.freeze ? Object.freeze(merged) : merged;
