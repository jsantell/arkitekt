var Backbone = require('backbone');
var config = require('../config');

module.exports = Backbone.Collection.extend({
  model: require('../models/item'),
  url: config.apiURL + 'items',
  initialize: function () {
  }
});
