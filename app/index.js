var Backbone = require('backbone');
var Router = require('./router');
var config = require('./config');

var app = {};

// Since jQuery isn't up to date in npm..
Backbone.$ = require('../vendor/scripts/jquery');

// Fire up router
app.router = new Router();

// Hook GA into Backbone navigation
var analytics = require('./lib/analytics');
analytics();

Backbone.history.start({ root: config.root });

module.exports = app;
