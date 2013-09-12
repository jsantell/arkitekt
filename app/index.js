var Router = require('./router');
var analytics = require('./lib/analytics');

module.exports = (function () {
  var app = {};
  app.router = new Router();
  analytics();
  support();
  return app;
})();
